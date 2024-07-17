// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'expo',
    'prettier',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-else-return': 'off',
    'no-console': 'off',
    'max-len': ['error', { code: 100 }],
    'react/react-in-jsx-scope': 'off',
    'global-require': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'consistent-return': 'off',
  },
};
