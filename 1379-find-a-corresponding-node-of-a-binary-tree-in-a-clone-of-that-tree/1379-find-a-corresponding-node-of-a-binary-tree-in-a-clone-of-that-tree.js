/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    return find(cloned)
    
    function find(cur) {
        if (!cur) return
        if (cur.val === target.val) return cur
        return find(cur.left) || find(cur.right)
    }
};

getTargetCopy = function(original, cloned, target) {
    return bfs(cloned)
    
    function bfs(root) {
        const stack = [root]
        while (stack.length) {
            const node = stack.shift()
            if (node.val === target.val) return node
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        return null
    }
}