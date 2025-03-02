import affectAppPackage from './.eslint.config/app/config.js'
import affectDefaultPackages from './.eslint.config/default/config.js'
import affectDomainPackage from './.eslint.config/app/domain/config.js'
import affectResourcesPackage from './.eslint.config/app/resources/config.js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

const defautConfig = tseslint.config(
  { ignores: ['coverage', 'dist', 'node_modules', 'storybook-static'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
    },
    plugins: {
      'unused-imports': unusedImports,
      prettier: eslintPluginPrettier,
    },
  },
)

export default [
  ...defautConfig,
  ...affectDefaultPackages,
  ...affectAppPackage,
  ...affectDomainPackage,
  ...affectResourcesPackage,
]
