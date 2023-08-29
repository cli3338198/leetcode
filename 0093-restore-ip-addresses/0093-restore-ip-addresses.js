/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    s = s.replace(/\D+/g, "")
    const res = []
    backtrack(0, [])
    return res.map(list => list.join("."))
    
    function backtrack(idx, curlist) {
        if (idx === s.length && curlist.length === 4) {
            return res.push(curlist.slice())
        }
        for (let i=idx; i < idx+3 && i < s.length; i++) {
            const sub = s.substring(idx, i+1)
            if (sub > 255 || (sub[0] === '0' && sub.length > 1)) continue
            curlist.push(s.substring(idx, i+1))
            backtrack(i+1, curlist)
            curlist.pop()
        }
    }
};