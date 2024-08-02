import {mergeClasses} from '../merge-classes';

export function cva<T extends object | string, Variant extends string>(
  baseConfig: T,
  options: {variants: Record<Variant, T extends string ? string : Partial<object>>},
): typeof merge {
  const merge = (variant: keyof (typeof options)['variants']): T => {
    const config = options.variants[variant] as T;
    const keys = Object.keys(baseConfig) as Array<keyof typeof baseConfig>;

    if (typeof baseConfig === 'string') {
      return mergeClasses(baseConfig, config) as T;
    }

    for (const key of keys) {
      if (typeof config[key] === 'string') {
        config[key] = mergeClasses([baseConfig[key], config[key]]) as T[keyof T];
      } else {
        config[key] = config[key] ?? baseConfig[key];
      }
    }

    return config;
  };

  return merge;
}
