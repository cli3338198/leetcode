/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // preorder
    const res = []
    dfs(root)
    return JSON.stringify(res)
    
    function dfs(root) {
        if (!root) {
            res.push(null)
            return
        }
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = JSON.parse(data)
    let i = 0
    return dfs()
    
    function dfs() {
        if (data[i] === null) {
            i++
            return null
        }
        const root = new TreeNode(data[i])
        i++
        root.left = dfs()
        root.right = dfs()
        return root
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */