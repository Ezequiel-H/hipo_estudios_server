export const isTranslation = error => ({
  options: value => {
    if (typeof value !== 'object' || !value.es || !value.en) {
      return Promise.reject(error);
    }
    return value;
  }
});
