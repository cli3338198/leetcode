/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const graph = {}, indegree = {}
    for (let i=0; i < recipes.length; i++) {
        const recipe = recipes[i], ings = ingredients[i]
        indegree[recipe] = ings.length
        for (const ing of ings) {
            graph[ing] = graph[ing] || []
            graph[ing].push(recipe)
        }
    }
    while (supplies.length) {
        const ing = supplies.shift()
        for (const nextIng of graph[ing] || []) {
            indegree[nextIng] = indegree[nextIng] || 0
            indegree[nextIng]--
            if (indegree[nextIng] === 0) {
                supplies.push(nextIng)
            }
        }
    }
    return recipes.filter(recipe => indegree[recipe] === 0)
};

findAllRecipes = function(recipes, ingredients, supplies) {
    const graph = {}, set = new Set(), res = []
    supplies = new Set(supplies)
    for (let i=0; i < recipes.length; i++) {
        graph[recipes[i]] = ingredients[i]
    }
    for (const recipe of recipes) {
        if (dfs(recipe)) {
            res.push(recipe)
        }
    }
    return res
    
    function dfs(ing) {
        if (supplies.has(ing)) return true
        if (!(ing in graph) || set.has(ing)) return false
        set.add(ing)
        for (const nextIng of graph[ing] || []) {
            if (!dfs(nextIng)) {
                return false
            }
        }
        set.delete(ing)
        return true
    }
}