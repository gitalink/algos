class LRUCache {
  constructor(capacity) {
      this.capacity = capacity
      this.cache = new Map()
      this.get = this.get.bind(this)
      this.put = this.put.bind(this)
  }

  get (key) {
      console.log('MAP AT GET', this.cache)
      const value = this.cache.get(key)
      // console.log('KEY', key, 'VALUE', value)
      if (value) {
           this.cache.delete(key)
           this.cache.set(key, value)
          return value
      }
      else return -1

  }

  put (key, value) {
      if (this.cache.size < this.capacity) {
          this.cache.set(key, value)
          console.log('Adding to cache', this.cache)
      }
      else {
          console.log('Map capacity', this.capacity, 'Map size', this.cache.size )
          const oldest = this.cache.keys().next().value
          console.log('OLDEST', oldest)
          this.cache.delete(oldest)
          console.log("REMOVED OLDEST", this.cache)
          this.cache.set(key, value)
          console.log('ADDED NEW VALUE', this.cache)
      }

  }
}

// const lRUCache = new LRUCache(2);
// console.log(lRUCache.put(1, 1)); // cache is {1=1}
// console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1));    // return 1
// console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2));    // returns -1 (not found)
// console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1));    // return -1 (not found)
// console.log(lRUCache.get(3));    // return 3
// console.log(lRUCache.get(4));    // return 4


// ["LRUCache","get","put",   "get",   "put",   "put",    "get",    "get"]
// [[2],[2],[2,6],             [1],    [1,5]     ,[1,2],   [1],      [2]]

const lRUCache = new LRUCache(2);
console.log(lRUCache.get(2)); // -1
console.log(lRUCache.put(2, 6)); // cache is {2=6}
console.log(lRUCache.get(1));    // -1
console.log(lRUCache.put(1, 5));
console.log(lRUCache.put(1, 2)); // {2=6, 1=5}
console.log(lRUCache.get(1));    // return 1:5
console.log(lRUCache.get(2)); // {2:6}

["LRUCache","put","put","put","put","get","get"]
[[2],       [2,1],[1,1],[2,3],[4,1],[1],[2]]

2:3, 1:1, 4:1
