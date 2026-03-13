const fs = require('fs');

const rs = fs.createReadStream('./readMe.txt');

rs.on('data', (chunk) => {
  console.log('데이터가 준비되었습니다.');
  console.log(chunk.length, chunk);
})
  .on('end', () => {
    console.log('읽기 작업이 끝났습니다');
  })
  .on('error', (err) => {
    console.error(`파일 에러: ${err}`);
  });
