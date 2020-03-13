// solution with sorting the array first and then using 2 loops
// algoexpert that used python exapmple says that sort runs in nlog(n) time, is that true for the sort in this case?
// if so, time complexity is O(n^2)

function threeNumberSum (array, targetSum) {
  array.sort((a,b) => {return a-b})
  console.log('ARRAY', array)
  const triplets = [];
	for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let leftIndex = i+1
    let rightIndex = array.length-1

    while (rightIndex > leftIndex) {
      let leftPointer = array[leftIndex]
      let rightPointer = array[rightIndex]

      if (num1 + leftPointer + rightPointer === targetSum) {
        const triplet = [num1, leftPointer, rightPointer]
        console.log('TRIPLET:', triplet)
        triplets.push(triplet)
        leftIndex +=1
        rightIndex -=1;
      }
      else if (num1 + leftPointer + rightPointer < targetSum) {
        leftIndex +=1
        console.log('moving the left')
      }
      else if (num1 + leftPointer + rightPointer > targetSum) {
        rightIndex -=1
        console.log('moving the right')
      }
    }
  }
  return triplets
}

// 3 loops solution - time complexity O(n^3)

// function threeNumberSum(array, targetSum) {
// 	const triplets = [];
// 	for (let i = 0; i < array.length; i++) {
// 		let num1 = array[i];
// 		for (let j = i+1; j < array.length; j++) {
// 			let num2 = array[j];
// 			for (let z = j+1; z < array.length; z++) {
// 				let num3 = array[z];
// 				if (num1+num2+num3 === targetSum) {
//           const triplet = [num1, num2, num3]
//           triplet.sort(( a , b ) => { return a-b })
// 					triplets.push(triplet)
// 				}
// 			}
// 		}
//   }
//   triplets.sort(( a, b ) => {
//     return a[0] - b[0]
//   }).sort((a, b) => {
//     if (a[0] === b[0])
//     return a[1] - b[1]
//   })

// 	return triplets
// }

console.log(threeNumberSum([1,2,3], 6))
console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0))

