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

dividePlayers = function(skill) {
    const sum = skill.reduce((acc, val) => acc + val, 0)
    const noTeams = skill.length / 2
    const skillPerTeam = sum / noTeams
    const teams = makeTeams(Array(skill.length).fill(false), [], 0, [])
    if (teams.length === noTeams) return teams.reduce((acc, team) => acc + team.reduce((acc, player) => acc * player, 1), 0)
    return -1                                            
    
    function makeTeams(used, curTeam, curSum, teams) {
        for (let i=0; i < skill.length; i++) {
            if (!used[i]) {
                if (curSum > 0 && curSum + skill[i] === skillPerTeam) {
                    used[i] = true
                    curTeam.push(skill[i])
                    teams.push(curTeam.slice())
                    makeTeams(used, [], 0, teams)
                } else if (curSum === 0) {
                    used[i] = true
                    curTeam.push(skill[i])
                    curSum += skill[i]
                    makeTeams(used, curTeam, curSum, teams)
                }
            }
        }
        return teams
    }
}

dividePlayers = function(skill) {
    const sum = skill.reduce((acc, val) => acc + val, 0)
    const noTeams = skill.length / 2
    const skillPerTeam = sum / noTeams
    const map = {}
    const teams = []
    for (const player of skill) {
        if (map[skillPerTeam - player]) {
            map[skillPerTeam - player]--
            teams.push([player, skillPerTeam - player])
        } else {
            map[player] = map[player] + 1 || 1
        }
    }
    if (teams.length === noTeams) return teams.reduce((acc, team) => acc + team.reduce((acc, player) => acc * player, 1), 0)
    return -1
}