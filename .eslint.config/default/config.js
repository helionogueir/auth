const config = [
  {
    files: ['**/*.{js,ts}'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      complexity: ['error', { max: 10 }],
      eqeqeq: 'error',
      'max-depth': ['error', 2],
      'max-lines': ['error', { max: 200, skipBlankLines: true }],
      'init-declarations': ['error', 'always'],
      'max-nested-callbacks': ['error', 3],
      'prettier/prettier': 'error',
      'consistent-return': 'error',
      'default-case-last': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-catch': 'error',
      'no-useless-return': 'error',
      'no-console': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-div-regex': 'error',
      'no-delete-var': 'error',
      'no-param-reassign': 'error',
      'no-dupe-else-if': 'error',
      'no-array-constructor': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-empty-character-class': 'error',
      'no-empty-static-block': 'error',
      'no-empty-pattern': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'valid-typeof': 'error',
      'eol-last': ['error', 'always'],
      'newline-before-return': 'error',
      'newline-after-var': ['error', 'always'],
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
      'padding-line-between-statements': [
        2,
        {
          blankLine: 'always',
          prev: '*',
          next: ['multiline-const', 'multiline-let'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: 'multiline-expression',
          next: '*',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
]

export default config
