const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const getLine = (function () {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => ((await getLineGen.next()).value);
})();

const main = async () => {
  console.log('Type value for a');
  let a = Number(await getLine());
  console.log(`Got a: ${a}`);
  
  console.log('Type value for b');
  let b = Number(await getLine());
  console.log(`Got b: ${b}`);

  console.log('Result of a+b');
  console.log(a + b);
  process.exit(0);
};

main();