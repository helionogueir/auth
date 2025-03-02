import NO_RESTRICTED_IMPORTS_APP from '../no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_APPLICATION from '../application/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_RESOURCES from '../resources/no-restricted-imports.js'

export const config = [
  {
    files: ['src/domain/**/*.{js,ts}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_APP,
            NO_RESTRICTED_IMPORTS_APP_RESOURCES,
            NO_RESTRICTED_IMPORTS_APP_APPLICATION,
          ],
        },
      ],
    },
  },
]

export default config
