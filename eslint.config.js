import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist/**'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    plugins: { react, 'react-hooks': hooks, 'react-refresh': refresh },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/jsx-no-target-blank': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['**/service-worker.js', 'src/serviceWorkerRegistration.js'],
    languageOptions: { globals: { process: 'readonly' } },
  },
]
