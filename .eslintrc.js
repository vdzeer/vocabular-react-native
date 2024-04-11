module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-misused-promises': 0,
  },
}
