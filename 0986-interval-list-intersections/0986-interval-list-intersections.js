/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0
    const res = []
    while (i < firstList.length && j < secondList.length) {
        const [s1, e1] = firstList[i], [s2, e2] = secondList[j]
        if (s1 <= e2 && s2 <= e1) {
            res.push([Math.max(s1, s2), Math.min(e1, e2)])
        }
        if (e1 <= e2) {
            i++
        } else {
            j++
        }
    }
    return res
};