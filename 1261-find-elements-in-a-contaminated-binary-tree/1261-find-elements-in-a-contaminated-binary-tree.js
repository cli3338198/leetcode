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
 */
// var FindElements = function(root) {
//     this.root = this.recover(root, 0)
// };

// FindElements.prototype.recover = function(root, x) {
//     if (!root) return null
//     root.val = x
//     root.left = this.recover(root.left, 2 * x + 1)
//     root.right = this.recover(root.right, 2 * x + 2)
//     return root
// }

/** 
 * @param {number} target
 * @return {boolean}
 */
// FindElements.prototype.find = function(target) {
//     return dfs(this.root, target)
    
//     function dfs(root, target) {
//         if (!root) return false
//         if (root.val === target) return true
//         return dfs(root.left, target) || dfs(root.right, target)
//     }
// };

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

class FindElements {
    constructor(root) {
        this.set = new Set()
        this.root = this.recover(root, 0)
    }
    // recover(root, x) {
    //     if (!root) return null
    //     root.val = x
    //     this.set.add(x)
    //     root.left = this.recover(root.left, 2 * x + 1)
    //     root.right = this.recover(root.right, 2 * x + 2)
    //     return root
    // }
    recover(root, x) {
        const q = [[root, x]]
        while (q.length) {
            const [root, x] = q.shift()
            root.val = x
            this.set.add(x)
            if (root.left) q.push([root.left, 2 * x + 1])
            if (root.right) q.push([root.right, 2 * x + 2])
        }
        return root
    }
    find(target) {
        return this.set.has(target)
    }
}