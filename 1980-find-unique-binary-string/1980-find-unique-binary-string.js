/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    nums = new Set(nums)
    return permutations(0).filter(p => !nums.has(p))[0]
    
    function permutations(i) {
        if (i >= nums.size) return [""]
        const res = []
        for (const p of permutations(i+1)) {
            res.push("0" + p)
            res.push("1" + p)
        }
        return res        
    }
};

findDifferentBinaryString = function(nums) {
    return nums.map((n, i) => n[i] === "1" ? "0" : "1").join("")
}