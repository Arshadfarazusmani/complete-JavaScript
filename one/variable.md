# VARIABLE 
 A variable is a named storage for data . just like containers, use to store values

"let" and "var" : keyword is  used  to create variable . -> values can be change after defination 

```js

let name = "Faraz ";
let age = 40;

```
## Constants in JavaScript
As well as variables, you can declare constants. These are like variables, except that:

        -> you must initialize them when you declare them
        -> you can't assign them a new value after you've initialized them.
        
 CONSTANTS : The Unchanged variables 
 const keyword is used to create constants -> No updation allowed 
```js
const Name ="Arshad "
const Age = 30;
```

### both let and const have block scope :-> 
```js
if(true){
    let userName = "its_Mohtish"
}

// console.log(userName);  // can not access vriable outside the scope 


//  * GIVE MEANINGFUL VARIABLE NAME 
```

## Do not use var 
var -> global scope : can be accessed from outside the scope 