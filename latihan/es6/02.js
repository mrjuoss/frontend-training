let num = 4
let factorial = 1

for (let i = num; i >= 1; i--) {
  factorial *= i
}

console.log(`${num} factorial = ${factorial}`)

console.log('Looping value in Object')
let obj = {
  a:1,
  b:3,
  c:5
}

for (let item in obj) {
  console.log(obj[item])
}

for(let val of ["Mohamad", "Arif", "Mujaki", 1987]) {
  console.log(val)
}

console.log("Factorial Again with While Loop")

let angkaFactorial = 5e
let nilaiFactorial = 1

while (angkaFactorial >= 1) {
  nilaiFactorial = nilaiFactorial * angkaFactorial

  angkaFactorial--
}

console.log("The factorial is "+nilaiFactorial)

console.log("Looping with do while")

let n = 10
do {
  console.log(n)
  n--
} while (n >= 0)
