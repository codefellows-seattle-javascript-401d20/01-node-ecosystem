# 01 Node Ecosystem

Greet and Arithmetic are functions that facilitate adding or subtracting two numbers or greeting someone.

## how to use

Please remember to require `greet` and `arithmetic` from the `lib/` directory at the top of your `index.js`

### greet()
- takes in an argument as a string, and returns `hello + <string>`
- if argument is not a string or null it will return `null`

```
console.log(greet('world'));
console.log(greet(6));

>> hello world
>> null
```


### arithmetic.add()
- takes in only two numbers as it's arguments and returns the sum of the numbers
- if any argument is not a number it will return `null`

```
console.log(arithmetic.add(2, 3));
console.log(arithmetic.add('2', '3'));

>> 5
>> null
```

### arithmetic.sub()
- takes in only two numbers as it's arguments and returns the difference of the numbers
- if any argument is not a number it will return `null`

```
console.log(arithmetic.sub(9, 3));
console.log(arithmetic.sub('9', '3'));

>> 6
>> null
```