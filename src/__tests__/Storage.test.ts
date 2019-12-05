import { propToLocalStorage, propToSessionStorage } from '../index';

/**
 * @jest-environment jsdom
 */

const localStorageKey = 'LOCAL_STORAGE_KEY';
const sessionStorageKey = 'SESSION_STORAGE_KEY';

class TestClass {
  @propToLocalStorage(localStorageKey)
  public testLocalProp: any;

  @propToSessionStorage(sessionStorageKey)
  public testSessionProp: any;

  constructor(value: any) {
    this.testLocalProp = value;
    this.testSessionProp = value;
  }
}

const testValue = 'value';
const testObject = new TestClass(testValue);

test('Local Storage Sync with property Test', () => {
  const valueFromLocalStorage: any = window.localStorage.getItem(localStorageKey);

  expect(testObject.testLocalProp).toBe(testValue);
  expect(testObject.testLocalProp).toBe(JSON.parse(valueFromLocalStorage));
});

test('Session Storage Sync with property Test', () => {
  const valueFromSessionStorage: any = window.sessionStorage.getItem(sessionStorageKey);

  expect(testObject.testSessionProp).toBe(testValue);
  expect(testObject.testSessionProp).toBe(JSON.parse(valueFromSessionStorage));
});
