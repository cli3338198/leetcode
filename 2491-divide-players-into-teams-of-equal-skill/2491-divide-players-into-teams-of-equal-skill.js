/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const sum = skill.reduce((acc, val) => acc + val, 0)
    const noTeams = skill.length / 2
    const skillPerTeam = sum / noTeams
    skill.sort((a, b) => a - b)
    const teams = []
    let l = 0, r = skill.length-1
    while (l < r) {
        if (skill[l] + skill[r] !== skillPerTeam) return -1
        teams.push([skill[l++], skill[r--]])
    }
    return teams.reduce((acc, team) => acc + team.reduce((acc, player) => acc * player, 1) ,0)
};