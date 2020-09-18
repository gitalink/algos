
//Given two sparse vectors, compute their dot product.
//https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

//Implement class SparseVector:

//dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
//A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.
// Come up with DS to store vector

//[2, 0, 3, 0, 4] a
//[1, 4, 5, 0, 0] b
// a1*b1+a2*b2+...+aN*bN;
// [{key:0, value:2}, {2,3}, {4, 4}]

// Implement dotProduct(E e1, E e2)

function makeDS (arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push({key: i, value: arr[i]})
    }
  }

  return result
}


function dotProject(ds1, ds2) {
  const result = 0

  let p1 = 0
  let p2 = 0

  while (p1 < ds1.length && p2 < ds2.length) {
    const pair1 = ds1[p1]
    const pair2 = ds2[p2]

    if (pair1.key === pair2.key) {
      result += pair1.value * pair2.value
    }
    else if (pair1.key < pair2.key) {
      p1++
    }
    else p2 ++
   }
  return result
}

https://leetcode.com/problems/design-underground-system/solution/
https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

