
// given a tree (not binary) of honda cost centers, find cheapest path
// follow up: also return the paths that are cheapest

// top down recursive approach
function getCheapestCost(rootNode) {
   const cheapestCost = [Infinity] // needs to be an array to be able to pass down recursive function by reference
   const cheapestPaths = []   // needs to be an array to be able to pass down recursive function by reference
   dfsVisit(rootNode, 0, [], cheapestCost, cheapestPaths)
   return [cheapestCost[0], cheapestPaths]
 }

 function dfsVisit(node, sum, path, cheapestCost, cheapestPaths) {
   if (!node.children.length) {
     sum += node.cost
     path.push(node.cost)
     if (cheapestCost[0] > sum) {
      cheapestCost[0] = sum
      while (cheapestPaths.length) cheapestPaths.pop()
      cheapestPaths.push([...path])
      console.log('path was smaller, remove all previous', cheapestPaths)
     }
     else if (cheapestCost[0] === sum) {
       cheapestPaths.push([...path])
       console.log('PATH was same length, adding', cheapestPaths)
     }
     return
   }

   sum += node.cost
   path.push(node.cost)
   const children = node.children
   for (const child of children) {
      dfsVisit(child, sum, path, cheapestCost, cheapestPaths)
      path.pop()
   }

 }

// function getCheapestCost(rootNode) {
//   // let cheapestPath = Infinity
//    return dfsVisit(rootNode, 0)
//  }

//  function dfsVisit(node, sum) {

//    if (!node.children.length) {
//      sum += node.cost
//      return sum
//    }

//    sum += node.cost

//    const children = node.children
//    let cheapestPath = Infinity

//    for (const child of children) {
//      const pathCost = dfsVisit(child, sum)
//      console.log(pathCost)
//      if (pathCost < cheapestPath) {
//        cheapestPath = pathCost
//      }
//    }
//    return cheapestPath
//  }

// option 3

function cheapestPath(root) {
  const n = root.children.length
  if (n === 0) return root.cost

  let minCost = Infinity
  for (let i = 0; i < n; i++) {
    let tempCost = cheapestPath(root.children[i])
    if (minCost > tempCost) minCost = tempCost
  }

  return minCost + root.cost
}



 /******************************************
  * Use the helper code below to implement *
  * and test your function above           *
  ******************************************/

 // Constructor to create a new Node
 function Node(cost) {
   this.cost = cost;
   this.children = [];
 }

 let root = new Node(0)
 console.log(root)
 //# level 1
 let level1_node1 = new Node(5)
 let level1_node2 = new Node(3)
 let level1_node3 = new Node(6)
 root.children = [level1_node1, level1_node2, level1_node3]
 //# level 2
 let level2_node1 = new Node(4)
 let level2_node2 = new Node(2)
 let level2_node3 = new Node(0)
 let level2_node4 = new Node(1)
 let level2_node5 = new Node(5)

 level1_node1.children.push(level2_node1)
 level1_node2.children = [level2_node2, level2_node3]
 level1_node3.children = [level2_node4, level2_node5]

 //# level 3
 let level3_node1 = new Node(1)
 let level3_node2 = new Node(10)

 level2_node2.children.push(level3_node1)
 level2_node3.children.push(level3_node2)

 // # level 4
 let level4_node1 = new Node(1)
 level3_node1.children.push(level4_node1)

 console.log(getCheapestCost(root))
 //console.log(cheapestPath(root))
