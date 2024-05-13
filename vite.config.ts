import { UserConfig, defineConfig, mergeConfig } from 'vite'
import { options } from './build/vite.rollup.options'
import baseConfig from './build/vite.config.base'

export default defineConfig(async () => {
  const pkg = await import('./package.json')
  const dependencies = Object.keys(pkg.dependencies)
  return mergeConfig(baseConfig, options({ dependencies }) as UserConfig)
})
