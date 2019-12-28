const myArgs = process.argv.slice(2);
for (let i = 0; i < myArgs.length; i++) {
  let timer = parseInt(myArgs[i], 10) * 1000;
  if (isNaN(timer)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);
}
