var globalVar = 'I am global';

function outerFunction() {
  var outerVar = 'I am in outer func';

  function innerFunction() {
    var innerVar = 'I am in iner func';
    console.log(globalVar); // 전역 변수 접근 가능
    console.log(outerVar); // 외부 함수의 변수 접근 가능
    console.log(innerVar); // 내부 함수의 변수 접근 가능
  }

  innerFunction();
}

outerFunction();
