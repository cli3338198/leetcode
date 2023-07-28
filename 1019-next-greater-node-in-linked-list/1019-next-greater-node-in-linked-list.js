/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const idxToNode = {} // map of indexes to nodes, b/c cannot store nodes in hash
    const map = {} // map of index of node to index of next greater node
    const stack = []
    const res = []
    let j = 0
    for (let cur=head, i=0; cur; cur=cur.next, i++) {
        idxToNode[i] = cur
        while (stack.length && cur.val > idxToNode[stack.at(-1)].val) {
            map[stack.pop()] = i
        }
        stack.push(i)
        j++
    }
    for (let i=0; i < j; i++) {
        if (i in map) {
            res.push(idxToNode[map[i]].val)
        } else {
            res.push(0)
        }
    }
    return res
};