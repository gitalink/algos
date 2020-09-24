
function maxHeight(root) {
  let maxHeight = [-1]
  let pLevel = -1
  maxHeightHelper(root, pLevel, maxHeight)
  return maxHeight[0]
}


function maxHeightHelper(node, pLevel, maxHeight) {
  const nLevel = pLevel+1
  if (maxHeight[0] < nLevel) maxHeight[0] = nLevel

  const children = node.children
  // base case
  if (!children.length) return
  // recursive case
  for (const child of children) {
    maxHeightHelper(child, nLevel, maxHeight)
  }
}



function Node(cost) {
  this.cost = cost;
  this.children = [];
}


let root = new Node(0)
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

console.log(maxHeight(root))
