fs = require('fs');

if (fs.existsSync('./test')) {
  console.log('해당 디렉토리가 있습니다.');
} else {
  fs.mkdir('./test', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('디렉토리가 생성되었습니다.');
  });
}
