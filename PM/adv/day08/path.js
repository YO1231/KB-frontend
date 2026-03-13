const path = require('path');

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

const fileName = __filename;
console.log(`파일 절대 경로: ${fileName}`);

console.log(`경로만: ${__dirname}`);

const f1 = path.basename(fileName);
console.log(`파일 이름: ${f1}`);

const f2 = path.basename(fileName, '.js');
console.log(`파일 이름(확장자 제외): ${f2}`);

const f3 = path.extname(fileName);
console.log(`파일 확장자: ${f3}`);

const allPath = path.parse(fileName);
console.log(allPath);
