import {AppEnvName} from '@libs/shared/utils/env';
import {Configuration} from './types';

export const appConfiguration: Configuration = {
  environment: <AppEnvName>'production',
  api: {
    baseUrl: 'https://backend-fightify.vercel.app',
  },
};
