/**
 * Sync property with localStorage.
 * @param key
 */
function propToLocalStorage(key: any = null) {
  return (target: any, propertyKey: string) => {
    const storageKey = key ? key : propertyKey;

    function setValue(value: any) {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    }

    function getValue() {
      const value: any = window.localStorage.getItem(storageKey);

      return JSON.parse(value);
    }

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: getValue,
      set: setValue,
    });
  };
}

/**
 * Sync property with localStorage.
 * @param key
 */
function propToSessionStorage(key: any = null) {
  return (target: any, propertyKey: string) => {
    const storageKey = key ? key : propertyKey;

    function setValue(value: any) {
      window.sessionStorage.setItem(storageKey, JSON.stringify(value));
    }

    function getValue() {
      const value: any = window.sessionStorage.getItem(storageKey);
      return JSON.parse(value);
    }

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: getValue,
      set: setValue,
    });
  };
}

export { propToLocalStorage, propToSessionStorage };
