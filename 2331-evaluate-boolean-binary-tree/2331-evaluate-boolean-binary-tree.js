/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if (!root) return true
    if (!root.left && !root.right) return root.val === 0 ? false : true
    if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    } else {
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
};

evaluateTree = function(root) {
    if (!root.left || !root.right) return root.val === 0 ? false : true
    const original = root
    const stack = []
    const map = {}
    let prev = null
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.at(-1)
            if (root.right && root.right !== prev) {
                root = root.right
            } else {
                if (!root.left && !root.right) {
                    map[root] = root.val
                } else if (root.val === 2) {
                    map[root] = map[root.left] || map[root.right]
                } else {
                    map[root] = map[root.left] && map[root.right]
                }
                stack.pop()
                prev = root
                root = null
            }
        }
    }
    return map[original]
}

evaluateTree = function(root) {
    switch (root.val) {
        case 1:
            return true
        case 2:
            return evaluateTree(root.left) || evaluateTree(root.right)
        case 3:
            return evaluateTree(root.left) && evaluateTree(root.right)
        default:
            return false
    }
}