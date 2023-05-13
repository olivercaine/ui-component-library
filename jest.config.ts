import type { Config } from 'jest'

/**
 * Jest docs: {@link https://jestjs.io/docs/configuration}
 */
const config: Config = {
  setupFilesAfterEnv: ['./jest.setup.ts'], // List of paths to run before each test file is executed
  clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test.
  resetMocks: true, // Automatically reset mock state before every test
  transform: { // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'], // Ignore test results to avoid infinite loop
  randomize: true, // Randomize the order of the tests in a file
  maxConcurrency: 20, // A number limiting the number of tests that are allowed to run at the same time when using test.concurrent
  testEnvironment: 'jsdom', // Run in a browser-like environment rather than Node
}

export default config
