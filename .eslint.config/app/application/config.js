import NO_RESTRICTED_IMPORTS_APP from '../no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_COMPONENTS from '../components/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_RESOURCES from '../resources/no-restricted-imports.js'

export const config = [
  {
    files: ['src/application/**/*.{js,ts}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_APP,
            NO_RESTRICTED_IMPORTS_APP_COMPONENTS,
            NO_RESTRICTED_IMPORTS_APP_RESOURCES,
          ],
        },
      ],
    },
  },
]

export default config
