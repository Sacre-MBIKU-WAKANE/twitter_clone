// import { configApp } from '@adonisjs/eslint-config'
// export default configApp()
import adonisJSPlugin from '@adonisjs/eslint-plugin'

export default [
  {
    plugins: {
      '@adonisjs': adonisJSPlugin,
    },
    rules: {
      '@adonisjs/prefer-lazy-controller-import': 'error',
      '@adonisjs/prefer-lazy-listener-import': 'error',
    },
  },
]
