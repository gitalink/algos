
// Given a Tree, print all paths from root to leaf.

function getAllPaths (root) {
  const paths = []
  getPathsHelper(root, [], paths)
  return paths

}
function getPathsHelper (node, currentPath, paths) {
  console.log('NODE', node)
  console.log('CURRENT PATH TO START', currentPath)
  currentPath.push(node.cost)


  if (!node.children.length) {
    console.log('CURRENT PATH AT LEAF', currentPath)
    paths.push([...currentPath])
    return
  }

  const children = node.children
  for (const child of children) {
    getPathsHelper(child, currentPath, paths)
    currentPath.pop()
  }
}






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


console.log(getAllPaths(root))
