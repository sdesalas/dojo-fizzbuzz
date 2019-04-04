process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you?')
process.stdin.on('data', function(age) {
  console.log('You are ' + age.trim() + ' years old')
  if (!Number(age)) {
    console.log('eh?')
  } else if (age > 99) { 
    console.log('Too old!')
  } else if (age < 1) {
    console.log('You are from the future!')
  } else {
    var year = 2019
    var birth = year - age
    console.log('You were born in ' + birth)
  }
  process.exit()
})