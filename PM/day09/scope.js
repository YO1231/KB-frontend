function outer() {
  var outerVar = 'I am outer';

  function inner() {
    var innerVar = 'I am inner';
    console.log(outerVar);
    console.log(innerVar);
  }

  inner();
  //   console.log(innerVar);
}

outer();
