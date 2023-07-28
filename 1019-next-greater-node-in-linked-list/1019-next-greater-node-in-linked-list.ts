/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nextLargerNodes(head: ListNode | null): number[] {
    const map: Record<string, number> = {} // map of index of node to index of next greater
    const idxToNode: Record<string, ListNode> = {} // map of index to node
    const res: number[] = []
    const stack: number[] = []
    let j = 0 // keep track of last index
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