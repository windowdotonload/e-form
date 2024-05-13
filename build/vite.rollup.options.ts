import { defineConfig } from 'vite'
type ViteConfig = Parameters<typeof defineConfig>[0]
interface ConfigArgs {
  dependencies: string[]
}
export const options = (args: ConfigArgs): ViteConfig => {
  const { dependencies } = args
  const dep = dependencies.map(dep => dep.split('/')[dep.split('/').length - 1])
  return {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames(chunkInfo) {
            if (dep.indexOf(chunkInfo.name) !== -1) {
              return `vendor/${chunkInfo.name}.js`
            }
            return '[name]-[hash].js'
          },
          manualChunks(id: string) {
            for (const i of dep) {
              if (id.includes(i)) {
                return i
              }
            }
          },
        },
      },
    },
  }
}
