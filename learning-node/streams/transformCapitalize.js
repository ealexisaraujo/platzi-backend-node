const { Transform } = require('stream');

function capitalize(string) {
  const array = string.split(' ');
  let finalString = '';
  for (let i = 0; i < array.length; i++) {
    finalString += array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return finalString;
}

const transformStream = new Transform({
  transform(chunk, enconding, callback) {
    this.push(capitalize(chunk.toString()));
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);
