var esprima = require('esprima')
const fs = require("fs");
const source = fs.readFileSync("./parsed.js", "utf8");

tokenized = esprima.tokenize(source);
console.log()

fs.writeFile("tokenized.json", JSON.stringify(tokenized), (err) => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("file saved!");
});

