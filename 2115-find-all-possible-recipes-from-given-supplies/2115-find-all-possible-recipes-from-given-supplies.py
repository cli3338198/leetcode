class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        graph, indegree, q, res = defaultdict(list), defaultdict(int), deque(supplies), []
        for i in range(0, len(recipes)):
            recipe, recipe_ingredients = recipes[i], ingredients[i]
            indegree[recipe] = len(recipe_ingredients)
            for ing in recipe_ingredients:
                graph[ing].append(recipe)
        recipes = set(recipes)
        while q:
            ing = q.popleft()
            if ing in recipes:
                res.append(ing)
            for next_ing in graph[ing]:
                indegree[next_ing] -= 1
                if indegree[next_ing] == 0:
                    q.append(next_ing)
        return res
        