
const fs = require("fs");
var data = JSON.parse(fs.readFileSync('./parsedTest.json'));

arr = []
data.body.forEach((e) => {
    if (e.expression) {
        if (e.expression.callee.name === "test") {
            arr.push(e)
            // console.log(e)
        }
    }   
    }
);
fs.writeFile("test_functions.json", JSON.stringify(arr), (err) => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("file saved!");
});

console.log(arr)


