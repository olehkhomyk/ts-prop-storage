# ts-prop-storage


@ts-prop-storage decorator

To sync property in your class with local | session storage property.

Example:

import { propToLocalStorage, propToSessionStorage } from 'ts-prop-storage';

class MyClass {

    // Here you can put the key (name) of property and it will save it
    // in localStorage with this key
    // key (name) is not required, by default it takes name from target property.

    @propToLocalStorage(key: string)
    private myProperty: string;

    // And the same thing with propToSessionStorage.
    @propToSessionStorage(key: string)
    private myProperty: string;

    public myFunc() {
        if (expression) {
            // Here After yo assing any value in to this property
            // it will automaticly sync with localStorage property
            // with the same name.

            this.myProperty = 'Hello I am User';
        }
    }
}



