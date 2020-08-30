var frequencySort = function(s) {
  const charFrequency = {}
  const charPosition = {}
  let result = []

  for (let i = 0; i < s.length; i++) {
      (!charFrequency[s[i]]) ? charFrequency[s[i]] = 1 : charFrequency[s[i]] ++
      if (!charPosition[s[i]])  charPosition[s[i]] = 1
  }

  const chars = Object.keys(charFrequency)

  chars.sort((a,b) => {
      if (charFrequency[a] > charFrequency[b]) return -1
      else if (charFrequency[a] > charFrequency[b]) return 1
      else {
          return charPosition[a] - charPosition[b]
      }
  })


  for (let j = 0; j < chars.length; j++) {
      let char = chars[j]
      let counter = charFrequency[char]
      while (counter) {
          result.push(char)
          counter --
      }
  }
  return result.join('')
};
