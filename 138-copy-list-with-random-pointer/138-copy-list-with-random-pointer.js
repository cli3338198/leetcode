/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map()
    for (let cur = head; cur; cur = cur.next) {
        map.set(cur, new Node(cur.val))
    }
    map.forEach((value, key, map) => [value.next, value.random] = [map.get(key.next) || null, map.get(key.random) || null])
    return map.get(head)
};
