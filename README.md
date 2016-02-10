ReactiveBool
------------

This package adds a type to your ReactiveVar to express your intentions more clearly in code. It guarantees that you will always have a Boolean in your reactive var. It also provides a reactive 'toggle' method.

## Usage

```js
let bool = new ReactiveBool(true);
bool.get(); // -> true

bool = new ReactiveBool(); // pass an undefined value into the constructor
bool.get(); // -> false, because undefined is falsey, as is 0, '', null etc.
bool.toggle(); // -> true

bool.set(false);
bool.set(`there's a value in here`);
bool.get() // -> true

bool.toggle();
bool.get(); // -> false
```

