/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.nodes = []
    for (; head; head = head.next) {
        this.nodes.push(head.val)
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.nodes[Math.floor(Math.random() * this.nodes.length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */