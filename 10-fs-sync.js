const {readFileSync, writeFileSync} = require('fs')
console.log('start')
//   same as above
//  const fs = require('fs')
//  fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first}, ${second}`, 
    {flag: 'a'}
)

console.log('done with this task')
console.log('strating next')