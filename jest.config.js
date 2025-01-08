module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: './src/index.ts',
  testMatch: ['**/*.test.ts'],
}
