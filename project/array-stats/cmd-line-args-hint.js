const args = process.argv.slice(2)
console.log(args)

if(1 == args.length){
  const name = args[0]
  console.log(`Hello, ${name}!`)
} else {
  console.log("Hello, world!")  
}
