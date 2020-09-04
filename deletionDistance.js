/*
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0

*/


function deletionDistance(str1, str2) {
    const str1Len = str1.length
    const str2Len = str2.length

    // allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
    const memo = new Array(str1Len+1)
    for (let z= 0; z < memo.length; z++) {
      memo[z] = new Array(str2Len+1)
    }

    for (let i = 0; i <= str1Len; i++) {       // 2 < 4
        for (let j = 0; j <= str2Len; j++) {  // 3 < 3
            console.log('I', i, 'J', j)
            console.log(memo[i][j])
            if (i === 0) {
              console.log("I was zero")
              memo[i][j] = j
                console.log(memo)
            }
            else if (j === 0) {
              console.log('j was zero')
              memo[i][j] = i
            }

            else if (str1[i-1] === str2[j-1]) {
              console.log('else if 2 ran')
                  memo[i][j] = memo[i-1][j-1]
                }
            else {
                console.log('else ran')
                  memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1])
                }
        }
    }
    return memo[str1Len][str2Len]
}
