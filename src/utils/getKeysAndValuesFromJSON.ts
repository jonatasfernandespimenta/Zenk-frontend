export function getKeysAndValuesFromJSON(data: Object) {
  return Object.entries(data).map((item) => {
    const keys = item[0];
    const values = item[1];

    return {
      key: keys,
      value: values,
    };
  });
}
