export const isObject = value => typeof value === 'object';

export const changeField = (object, fieldName, newValue) => {
  // eslint-disable-next-line no-param-reassign
  object[fieldName] = newValue;
};

export const isInstanceOf = (obj, instance) => obj instanceof instance;

export const isSomeInstance = (obj, instances) => instances.some(instance => isInstanceOf(obj, instance));

export const isShallowObject = obj => typeof obj === 'object' && !isSomeInstance(obj, [Date, RegExp]);

export const flatMapToKeyValue = notShallowableKeys => obj =>
  Object.entries(obj).flatMap(([key, value]) =>
    notShallowableKeys.includes(key)
      ? []
      : isShallowObject(value)
      ? flatMapToKeyValue(notShallowableKeys)(value)
      : { [key]: value }
  );
