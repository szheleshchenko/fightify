import {mergeClasses} from '../merge-classes';

export function cva<T extends object, Variant extends string>(
  baseConfig: T,
  options: {variants: Record<Variant, Partial<T>>},
): typeof merge {
  const merge = (variant: keyof (typeof options)['variants']): T => {
    const config = options.variants[variant] as T;
    const keys = Object.keys(baseConfig) as Array<keyof typeof baseConfig>;

    for (const key of keys) {
      if (typeof config[key] === 'string') {
        config[key] = mergeClasses([baseConfig[key], options.variants[variant][key]]) as T[keyof T];
      } else {
        config[key] = config[key] ?? baseConfig[key];
      }
    }

    return config;
  };

  return merge;
}
