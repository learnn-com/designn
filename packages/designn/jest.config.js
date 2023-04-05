/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.tsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }]
  },
  moduleNameMapper: {
    '^@gianlucacarucci5/desio$': '<rootDir>/src/index.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts']
}
