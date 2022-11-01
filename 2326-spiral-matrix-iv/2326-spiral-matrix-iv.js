/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const mat = Array(m).fill(0).map(() => Array(n))
    let left = 0
    let right = n-1
    let top = 0
    let bottom = m-1
    while (left <= right && top <= bottom) {
        for (let c=left; c <= right; c++) {
            mat[top][c] = getNext()
        }
        top++
        for (let r=top; r <= bottom; r++) {
            mat[r][right] = getNext()
        }
        right--
        if (top > bottom) break
        for (let c=right; c >= left; c--) {
            mat[bottom][c] = getNext()
        }
        bottom--
        if (left > right) break
        for (let r=bottom; r >= top; r--) {
            mat[r][left] = getNext()
        }
        left++
    }
    return mat
    
    function getNext() {
        if (!head) return -1
        const temp = head
        if (head) head = head.next
        return temp.val
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
};