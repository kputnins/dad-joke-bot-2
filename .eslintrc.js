const eslintConfig = require('@liene-putnina/eslint-config-lintmyride');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    ...eslintConfig.rules,
    'no-console': 0,
    'import/prefer-default-export': 0,
  },
};
