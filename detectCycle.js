
// Given a graph detect if it has a cycle

// Approach
// have a way to mark status : unvisited, visiting, visited
// use DFS traversal through the graph
// we have a cycle if while traversing down the graph we bump into a node that is a 'parent', so only if
// we encounter a node with 'visiting' status we can say we have a cycle
// mark as visiting
// visit each neighbor, is unvisited and dfs of it returns true, return true
// if neighbor status is visiting, return true
// mark node as visited at the end and return false 

class Graph {
  constructor(arr) {
    this.nodes = [arr]
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.neighbors = []
    this.status = 'unvisited'
  }
}

function detectCycle(graph) {
  for (const node of graph.nodes) {
    if (node.status === 'unvisited' && dfsDetectCycle(node)) return true
    return false
  }
}

function dfsDetectCycle(node) {
  node.status = 'visiting'
  for (const neighbor of node.neighbors) {
    if (neighbor.status === 'unvisited' && dfsDetectCycle(neighbor)) return true
    if (neighbor.status === 'visiting') return true
  }
  node.status = 'visited'
  return false
}
