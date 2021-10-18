console.log("Hello, world!")
// from:
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
console.log("process.argv", process.argv)

const args = process.argv.slice(2)
console.log(args)
