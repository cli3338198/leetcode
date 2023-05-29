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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return null
    if (root.val === val) return root
    return searchBST(root.left, val) || searchBST(root.right, val)
};

searchBST = function(root, val) {
    if (!root) return null
    if (root.val === val) return root
    if (root.val < val) {
        return searchBST(root.right, val)
    } else {
        return searchBST(root.left, val)
    }
}

searchBST = function(root, val) {
    const q = [root]
    while (q.length) {
        const n = q.shift()
        if (n.val === val) return n
        if (n.val < val && n.right) {
            q.push(n.right)
        } else if (n.val > val && n.left) {
            q.push(n.left)
        }
    }
    return null
}

searchBST = function(cur, val) {
    while (cur) {
        if (cur.val === val) return cur
        if (cur.val > val && cur.left) {
            cur = cur.left
        } else if (cur.val < val && cur.right) {
            cur = cur.right
        } else {
            break
        }
    }
    return null
}