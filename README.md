## Parsing UUID code

### Required:

- TestID
- Inputs of the actual function 
- Expected output from the test function

### Expected Methodology

- Get the input parameters using the arguments method in js

```javascript
function first(a, b, c) {
    console.log(arguments[0]);

    console.log(arguments[1])

    console.log(arguments[2])
}
 
first(1, 2, 3);

//output
//1
//2
//3
```

Alternatively, we can use parse-function package available at npm for this task.

<a href="https://www.npmjs.com/package/parse-function">npm parse-function</a>

```shell
$ npm i --save parse-function
```

- Using Parse Function Libray extract the name/ID of the function and the expected output 


