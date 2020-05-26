// Implement a queue that has a max method returning a maximum in O(1) TimeRanges.

class QueueWithMax {
  constructor() {
    this.queue = []
    this.maxDeque = []
  }

  add(num) {
    this.queue.unshift(num)
    while(this.maxDeque[0] < num) {
      this.maxDeque.shift()
    }
    this.maxDeque.unshift(num)
    return this
  }

  remove() {
    const removed = this.queue.pop()
    if (removed === this.maxDeque[this.maxDeque.length-1]) {
      this.maxDeque.pop()
    }
    return removed
  }

  max() {
    if (!this.maxDeque.length) {
      return 'Queue is empty'
    }
    return this.maxDeque[this.maxDeque.length-1]
  }
}

//given an array on integers and a number k, find a max in each sliding window of k elements
// A = [4,6,5,2,4,7] and K = 3, windows are as follows:
// [4,6,5,2,4,7] : Max = 6
// [4,6,5,2,4,7] : Max = 6
// [4,6,5,2,4,7] : Max = 5
// [4,6,5,2,4,7] : Max = 7
// Output: 6,6,5,7

function slidingWindowMax(arr, k) {
  const result = []
  const window = new QueueWithMax

  for (let i = 0; i < k; i++) {
    window.add(arr[i])
  }
  result.push(window.max())

  for (let j = k; j< arr.length; j++) {
    window.remove()
    window.add(arr[j])
    result.push(window.max())
  }
  return result
}

console.log(slidingWindowMax([4,6,5,2,4,7], 3))




