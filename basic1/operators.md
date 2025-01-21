# Operators
Operators in programming are symbols or keywords that represent computations or actions performed on operands

## Arithmetic operators

Arithmetic operators are used for performing mathematical calculations in JavaScript:

## Comparison operators 
     -> (<,>,<=,>=,==,===,!=,!==)

Comparison operators alwayes gives Boolean value as a result .

### Strict equality (===)

A regular equality check == has a problem. It cannot differentiate 0 from false:
```js
alert( 0 == false ); // true
```

The same thing happens with an empty string:
```js
alert( '' == false ); // true
```

This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate 0 from false?

        A strict equality operator === checks the equality without type conversion.

In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

Let’s try it:
```js
alert( 0 === false ); // false, because the types are different
```
There is also a “strict non-equality” operator !== analogous to !=.

