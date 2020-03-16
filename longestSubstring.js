
function longestSubString(string) {
  let s = 0
  let e = 1
  let substring = string.slice(s, e)
  let longestSubstring = substring
  let indices = [s, e]

  while (s < string.length && e < string.length) {
    let char = string[e]
    if (substring.indexOf(string[e]) === -1) {
      substring += string[e]
      e += 1
      if (longestSubstring.length < substring.length) {
        longestSubstring = substring
        indices = [s, e]
      }
    }
    else {
      s += substring.indexOf(string[e])+1
      e += 1
      substring = string.slice(s, e)
    }
  }
  return [longestSubstring, indices]
}






console.log(longestSubString('whatwhywhere'))
//should be equal to 'atwhy'
