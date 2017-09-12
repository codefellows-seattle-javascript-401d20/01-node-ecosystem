![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Exported Values
#### Greet Module
Exports a single function
* The `greet` function has an arity of one
* The data type for this parameter is string
* If the parameter is a string, the `greet` function returns the parameter concatenated with `'hello '`, for example `hello katherine`
* Else the `greet` function returns `null`

#### Arithmetic Module
Exports an object. This module has `add` and `sub` methods that implement addition and subtraction
* The `add` method has an arity of two
  * The data type for these parameters is number
  * If both parameters are numbers, the function returns the two numbers' sum, for example `5` for `(2,3)`
  * Else the function returns `null`
* The `sub` method has an arity of two
  * The data type for these parameters is number
  * If both parameters are numbers, the function returns the difference of the second parameter subtracted from the first parameter, for example `-1` for `(2,3)`
  * Else the function returns `null`
