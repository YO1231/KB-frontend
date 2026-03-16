fs = require('fs');

if (fs.existsSync('./test2/test3/test4')) {
  console.log('해당 디렉토리가 있습니다.');
} else {
  fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('디렉토리가 생성되었습니다.');
  });
}
