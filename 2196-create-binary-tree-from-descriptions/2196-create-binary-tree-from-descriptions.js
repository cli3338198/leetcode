/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const map = {}
    const set = new Set()
    for (const [parent, child, isLeft] of descriptions) {
        map[parent] = map[parent] || new TreeNode(parent)
        map[child] = map[child] || new TreeNode(child)
        if (isLeft === 1) {
            map[parent].left = map[child]
        } else {
            map[parent].right = map[child]
        }
        set.add("" + child)
    }
    for (const key in map) {
        if (!set.has(key)) {
            return map[key]
        }
    }
};