let num = 10

function test() {
  let num = 200
  console.log(`Value of num in test() function is ${num}`)
}

test()

console.log(`Value of num outset test() is ${num}`)

// Condistional Operator (?)
let angka = -2

let result = angka > 0 ? "Angka bernilai postif" : "Angka bernilai negatif"

console.log(result)

// Check tipe variabel
console.log("variabel angka bertipe : " +typeof angka)

let grade = "A+"

switch (grade) {
  case "A": {
    console.log("Execelent")
    break
  }
  case "B": {
    console.log("Good")
    break
  }
  case "C": {
    console.log("Enough")
    break
  }
  default: {
    console.log("Please enter your grade")
    break
  }
}
