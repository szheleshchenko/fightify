import {ClassTransformOptions, instanceToPlain} from 'class-transformer';

export const prepareRequestParams = <T>(object: T, options?: ClassTransformOptions) => {
  return instanceToPlain(object, {
    exposeUnsetFields: false,
    excludeExtraneousValues: true,
    ...options,
  });
};
