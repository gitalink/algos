var Solution = function(nums) {
  this.original = nums

};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.original
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const copy = [...this.original]
  for (let i = 0; i < copy.length; i++) {
      // get random index from current index to the end of the array
      const randomIndex = Math.floor(Math.random() * (copy.length-i) + i )

      let temp = copy[i]
      copy[i] = copy[randomIndex]
      copy[randomIndex] = temp
  }
  return copy

};
