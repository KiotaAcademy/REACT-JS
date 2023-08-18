# pure functions

A pure function is a function that always produces the same output for the same input and has no side effects.

study two functions below

```js
var conversionRate = 1.5;

function convertAmount(amount) {
  return amount * conversionRate;
}
convertAmount(30);

function convertThisAmount(amount, rate) {
  return amount * rate;
}

convertThisAmount(30, conversionRate);
```

the difference between `convertAmount` and `convertThisAmount` is that the latter takes two parameters.

the latter function is a pure function (relies only on the arguments passed in) whilst the first one is impure (it relies in a global variable)

## characteristics of pure functions

1. only access local variables
2. no side effects
3. Given the same input, they will always render the same output
