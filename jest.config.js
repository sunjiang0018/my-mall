module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/**/*.[jt]s?(x)'
  ],
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**', '!*.js', '!coverage/**']
}