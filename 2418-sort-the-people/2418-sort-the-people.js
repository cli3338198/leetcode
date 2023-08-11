/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((n, i) => ([n, i])).sort(([,a], [,b]) => heights[a] > heights[b] ? -1 : 1).map(([n]) => n)
};