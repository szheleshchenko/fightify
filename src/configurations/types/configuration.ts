import {AppEnvName} from '@libs/shared/utils/env';

export type Configuration = {
  environment: AppEnvName;
  api: {
    baseUrl: string;
  };
};
