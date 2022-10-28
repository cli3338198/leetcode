/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.stack = []
    for (const num of nums) {
        if (!this.stack.length) {
            this.stack.push(num)
        } else {
            this.stack.push(num + this.stack[this.stack.length-1])
        }
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.stack[right] - (this.stack[left-1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */