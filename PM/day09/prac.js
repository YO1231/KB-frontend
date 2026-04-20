if (true) {
  var functionScopedVar = 'I am function scoped';
}

console.log(functionScopedVar); // 'I am function scoped'

function myFunction() {
  var localVar = 'I am local';
  console.log(localVar); // 'I am local'
}

myFunction();

console.log(localVar); // ReferenceError: localVar is not defined

if (true) {
  let blockScopedVar = 'I am block scoped';
  console.log(blockScopedVar); // 'I am block scoped'
}

console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
