// Implement a queue that has a max method returning a maximum in O(1) TimeRanges.

class QueueWithMax {
  constructor() {
    this.queue = []
    this.maxDeque = []
  }

  add(num) {
    this.queue.unshift(num)
    console.log('NEW QUEUE', this.queue)
    while(this.maxDeque[0] < num) {
      this.maxDeque.shift()
    }
    this.maxDeque.unshift(num)
    console.log('NEW MAX', this.maxDeque)
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

const myQueue = new QueueWithMax
myQueue.add(1)
myQueue.add(2)
myQueue.add(5)
myQueue.remove()
myQueue.add(4)
myQueue.remove()
myQueue.add(3)

console.log('Queue', myQueue.queue, 'MaxDeue', myQueue.maxDeque)
