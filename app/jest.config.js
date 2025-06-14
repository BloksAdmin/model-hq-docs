// jest.config.js
const nextJest = require('next/jest')({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
  });
  
  // Add any custom config to be passed to Jest
  /** @type {import('jest').Config} */
  const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      // Handle module aliases (this will be automatically configured for you soon)
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      // Add other aliases here if needed
    },
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
  };
  
  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  module.exports = nextJest(customJestConfig);
  