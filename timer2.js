const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.name === 'b') {
    process.stdout.write('\x07');

  } else {
    let number = parseInt(key.name, 10);
    if (number >= 1 && number <= 9) {
      console.log(`setting timer for ${number} seconds...`);
      let timer = number * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer);
    }
  }
});















