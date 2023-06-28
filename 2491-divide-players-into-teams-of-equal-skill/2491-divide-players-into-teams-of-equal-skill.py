class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        total_sum = sum(skill)
        no_teams = len(skill) / 2
        skill_per_team = total_sum / no_teams
        skill.sort()
        l, r, teams = 0, len(skill)-1, []
        while l < r:
            if skill[l] + skill[r] != skill_per_team:
                return -1
            teams.append([skill[l], skill[r]])
            l += 1
            r -= 1
        return sum([reduce(lambda x, y: x * y, team) for team in teams])