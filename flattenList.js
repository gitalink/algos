
/*
0 - >1 2 3 4 5 6 7 null
    8 9 10 null
      11 12 null
fl(0, 1)

*/
class Node  {
  constructor(val, prev, next, child) {
    this.val = val
    this.prev = prev
    this.next = next
    this.child = child
  }

}

// console.log(new Node(0, null, null , null))

function flattenList (head) {
 if (head === null) return head
 const fakeHead = new Node(0, null, head, null)
 flattenDFS(fakeHead, head)
 fakeHead.next.prev = null
 return fakeHead.next
}

function flattenDFS (previous, current) {

  if (current === null) return previous

  // connect the nodes
  previous.next = current
  current.previous = previous

  // visit left -> recurse to child first, get the tail of flattened list

  const tempNext = current.next
  const tail = flattenDFS(current, current.child)
  current.child = null

  // visit right -> connect tail and temp next
  return flattenDFS (tail, tempNext)
}
