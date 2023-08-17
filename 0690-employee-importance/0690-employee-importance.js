/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const graph = {}
    const imps = {}
    for (const {id, importance: imp, subordinates: subs} of employees) {
        graph[id] = graph[id] || []
        imps[id] = imp
        graph[id] = subs
    }
    return dfs(id)
    
    function dfs(id) {
        let res = imps[id]
        for (const sub of graph[id] || []) {
            res += dfs(sub)
        }
        return res
    }
};