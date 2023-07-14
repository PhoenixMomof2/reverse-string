// take a line of letters
// reverse them in order from back to front
// input = "idontknowwhatimdoing" output = "gniodmitahwwonktnodi"
// input = "capricia" output = "aicirpac"
// input = "sixfigures" output = "serugifxis"


let input1 = "idontknowwhatimdoing"
let input2 = "capricia"
let input3 = "sixfigures"

const reverse_string = (string) => {
  let reversed_string = ""

  for (let i = string.length -1; i >= 0; i--) {
    reversed_string += string[i]
  }
  return reversed_string
}
console.log(reverse_string(input1))
console.log(reverse_string(input2))
console.log(reverse_string(input3))

// Second Method
const reverse_string2 = (string) => {
  
  for (let i = 0; i < string.length/2; i++) {

    let temp = string[i]
    let curr = string[string.length - 1 - i]
    string[i] = string[string.length -1 -i]
    string[string.length -1 -i] = temp
  }
return string
}
console.log(reverse_string2(input1))
console.log(reverse_string2(input2))
console.log(reverse_string2(input3))
// "capricia"
// [ "c", "a", "p", "r", "i", "c", "i", "a"]
// [ "0", "1", "2", "3", "4", "5", "6", "7"]
 