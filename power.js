function power (x, n) {
  if (x === 0 && n <=0) {
    return 'Zero Exception'
  }
  let result = positivePower(Math.abs(x), Math.abs(n))
  if (x < 0 && n%2 !== 0) {
    result = -1 * result
  }
  else if (n < 0) {
    result =  1 / result
  }
  return result
}

function positivePower (x, n) {
  if (n === 1) {
    return x
  }
  if (n === 0) {
    return 1
  }
  const halfPower = positivePower(x, Math.floor(n/2))
  if (n%2 === 0) {
    return halfPower * halfPower
  }
  else {
    return halfPower * halfPower * x
  }
}

console.log(power(2, 2))
console.log(power(2, -2))
console.log(power(-2, 3))
