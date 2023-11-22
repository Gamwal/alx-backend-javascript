console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  console.log(`Your name is: ${input.toString()}`);
  process.exit();
});
