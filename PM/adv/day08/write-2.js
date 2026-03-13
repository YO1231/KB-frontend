fs = require('fs');

fs.readFile('./example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }

  fs.writeFile('./text-2.txt', data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('text-2.txt is saved!');
  });
});
