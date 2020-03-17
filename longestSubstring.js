
// function longestSubString(string) {
//   let s = 0
//   let e = 1
//   let substring = string.slice(s, e)
//   let longestSubstring = substring
//   let indices = [s, e-1]

//   while (s < string.length && e < string.length) {
//     let char = string[e]
//     if (substring.indexOf(string[e]) === -1) {
//       substring += string[e]
//       e += 1
//       if (longestSubstring.length < substring.length) {
//         longestSubstring = substring
//         indices = [s, e]
//       }
//     }
//     else {
//       s += substring.indexOf(string[e])+1
//       e += 1
//       substring = string.slice(s, e)
//     }
//   }
//   return [longestSubstring, indices]
// }

// using hashMap O(n) time O(1) space
function longestSubString(string) {
  if (string.length <=1) {
    return string
  }

  let s = 0
  let e = 0
  let length = 1
  let longest = 1
  let indices = [0, 0]
  let hashMap = {[string[0]] : 0}

  while (e < string.length-1) {
    e++
    if (!hashMap.hasOwnProperty(string[e])) {
      length +=1
    }
    else if (hashMap.hasOwnProperty(string[e]) && hashMap[string[e]] >= s){
      s = hashMap[string[e]]+1
      length = e-s+1
    }

    if (longest < length) {
      longest = length
      indices = [s, e]
    }
    hashMap[string[e]] = e
  }
  return indices
}

console.log(longestSubString('whatwhywhere'))
//should be equal to 'atwhy'
