// Given an array of stock prices (integers) find maximum amount of money you can make with one trade (buy and sell)

// Test cases :
// Edge: null or empty array
// Base: one element in an array
// Regular: sorted array / asc/desc, normal case

function maxTrade (prices) {
  if (prices === null || prices.length < 2 ) {
    return 0
  }
  let minSoFar = Infinity
  let maxTrade = 0

  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(prices[i], minSoFar)
    maxTrade = Math.max(prices[i] - minSoFar, maxTrade )
  }
  return maxTrade
}


function max2Trades (prices) {
  if (prices === null || prices.length < 2) {
    return 0
  }
  const maxUntilI = new Array(prices.length)
  let minSoFar = Infinity
  let maxTrade = 0

  // find maximum trade until current i

  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(prices[i], minSoFar)
    maxTrade = Math.max(prices[i] - minSoFar, maxTrade)
    maxUntilI[i] = maxTrade
  }

  // find maximum trade from i
  // iterate backwords
  const maxFromI = new Array(prices.length)
  let maxSoFar = -Infinity
  maxTrade = 0

  for (let i = prices.length-1; i >= 0; i--) {
    maxSoFar = Math.max(maxSoFar, prices[i])
    maxTrade = Math.max(maxSoFar - prices[i], maxTrade)
    maxFromI[i] = maxTrade
  }
  let max2Trades = 0
  for (let i = 0; i < maxUntilI.length; i++) {
    maxSecondTrade = (i+1 < prices.length) ? maxFromI[i+1] : 0
    max2Trades = Math.max(max2Trades, (maxUntilI[i] + maxSecondTrade))
  }
  return max2Trades
}


const prices1 = [9,3,2,1,5,7,2,8,3,4]
const prices2 = [9]
const prices3 = null
const prices4 = [1,2,3,4,5,6,7]

console.log(maxTrade(prices1))
console.log(maxTrade(prices2))
console.log(maxTrade(prices3))
console.log(maxTrade(prices4))
console.log(max2Trades(prices1))


// now find maximum amount of money you can make with 2 trades

