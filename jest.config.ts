import type { Config } from 'jest'

// Docs: https://jestjs.io/docs/configuration
const config: Config = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test.
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  maxConcurrency: 20, // A number limiting the number of tests that are allowed to run at the same time when using test.concurrent
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: -10,
    },
  },
  testEnvironment: 'jsdom',
}

export default config
