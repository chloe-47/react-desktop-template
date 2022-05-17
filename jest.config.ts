import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
export default config;
