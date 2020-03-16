// Approach: traverse string from the end of it, once you find a space add word to the end

function reverseString(string) {
  let reversed = '';
  let startPointer = string.length-1
  let endPointer = string.length

  while (startPointer >= 0) {
    if (startPointer === 0) {
      reversed += string.slice(startPointer, endPointer)
    }
    if (string[startPointer] === ' ') {
      reversed += string.slice(startPointer+1, endPointer)
      reversed += ' '
      endPointer = startPointer
    }
    startPointer --
  }
  return reversed
}

console.log(reverseString('i live in a house'))

