function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const result = outer();

result(); // 1
result(); // 2
result(); // 3
