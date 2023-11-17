export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    return new RegExp(obj);
  } else if (obj instanceof Array) {
    return obj.map(deepClone);
  } else {
    const clone = {};
    for (const key in obj) {
      clone[key] = deepClone(obj[key]);
      if (key === 'children') {
        clone[key] = obj[key].map(deepClone);
      }
      if (key === 'parent') {
        clone[key] = obj[key].map(deepClone);
      }
    }
    return clone;
  }
}