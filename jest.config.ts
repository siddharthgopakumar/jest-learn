import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['./setupFile.ts']
};

export default config;