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
 * @return {string}
 */
var tree2str = function(root) {
    return dfs(root, "")
    
    function dfs(root) {
        if (!root) return ""
        let str = "" + root.val
        if (root.left) {
            str += "("
            str += dfs(root.left)
            str += ")"
        }
        if (root.right) {
            if (!root.left) str += "()"
            str += "("
            str += dfs(root.right)
            str += ")"
        }
        return str
    }
};

tree2str = function(root) {
    if (!root) {
        return ""
    }
    let str = "" + root.val
    if (!root.left && !root.right) {
        return str
    }
    if (!root.right) {
        return str + "(" + tree2str(root.left) + ")"
    }
    return str + "(" + tree2str(root.left) + ")" + "(" + tree2str(root.right) + ")"
}

tree2str = function(root) {
    if (!root) return ""
    const stack = []
    const set = new Set()
    let res = ""
    stack.push(root)
    while (stack.length) {
        const node = stack.at(-1)
        if (set.has(node)) {
            stack.pop()
            res += ")"
        } else {
            set.add(node)
            res += "(" + node.val
            if (!node.left && node.right) {
                res += "()"
            }
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }
    return res.substring(1, res.length-1)
}