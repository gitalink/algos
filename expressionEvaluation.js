
// Given a string infix expression, evaluate it.
// Aproach is to use 2 stacks, 1 for operands, another for operators
// If operator, first check for priority and process all higher or equal prio operators that are already on the stack, then add operator to the stack

function calculate(s) {
  const numStack = []
  const operatorsStack = []
  const operators = '+-*/'

  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      if (ch === ' ') {
          continue
      }
      else if (ch === '(') {
          operatorsStack.push('(')
      }
      else if (ch === ')') {
          while (operatorsStack[operatorsStack.length-1] !== '(') {
              process(numStack, operatorsStack)
          }
          operatorsStack.pop()
      }
      else if ((ch >='0' && ch <= '9' )) {
          const prevCh = s[i-1]
          if (prevCh >='0' && prevCh <='9') {
              prevDigit = numStack.pop().toString()
              prevDigit += ch
              numStack.push(Number(prevDigit))
          }
          else {
              numStack.push(Number(ch))
          }

      }
      else if (operators.includes(ch)) {
          if (operatorsStack.length &&
          operatorsStack[operatorsStack.length-1] !== '(') {
            while (prio(operatorsStack[operatorsStack.length-1]) >= prio(ch))
              process(numStack, operatorsStack)
          }
          operatorsStack.push(ch)
      }

  }
  while (operatorsStack.length) {
      process(numStack, operatorsStack)
  }
  return numStack[0]
}


function process(numStack, operatorsStack) {
  num2 = numStack.pop()
  num1 = numStack.pop()
  operator = operatorsStack.pop()
  let result = 0
  switch(operator) {
      case '+':
          result = num1 + num2
          break

      case '-':
          result = num1 - num2
          break
      case '*':
          result = num1 * num2
          break
      case '/':
          result = num1 / num2
  }
  numStack.push(result)
}

function prio (operator) {
  switch (operator) {
    case '+':
    case '-': return 1
    case '*':
    case '/': return 2
  }
}

console.log(calculate('1 + 8 / (1 + 3) * 2')) // 5

console.log(calculate('1 + (1 + 3) * 2')) // 9

console.log(calculate('1 + 2 / 1 + 3 * 2')) // 9

