import NO_RESTRICTED_IMPORTS_APP from '../no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_DOMAIN from '../domain/no-restricted-imports.js'

export const config = [
  {
    files: ['src/resources/**/*.{js,ts}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_APP,
            NO_RESTRICTED_IMPORTS_APP_DOMAIN,
          ],
        },
      ],
    },
  },
]

export default config
