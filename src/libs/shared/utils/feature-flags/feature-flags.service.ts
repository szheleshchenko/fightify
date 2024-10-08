import {Injectable} from '@angular/core';
import {appConfiguration} from '@configuration';
import {AppEnvName, appEnvStage} from '../env';
import {FeatureId} from './enums';

@Injectable()
export class FeatureFlagService {
  private config: Record<FeatureId, AppEnvName> = {};

  public isFeatureEnabled(featureId: FeatureId): boolean {
    const currentEnvironment = appConfiguration.environment;
    const featureEnvironment = this.config[featureId];

    return appEnvStage[currentEnvironment] <= appEnvStage[featureEnvironment];
  }

  public hasFeature(featureId: FeatureId): boolean {
    return !!this.config[featureId];
  }
}
