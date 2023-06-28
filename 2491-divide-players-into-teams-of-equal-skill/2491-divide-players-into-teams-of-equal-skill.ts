function dividePlayers(skill: number[]): number {
    const sum = skill.reduce((acc, val) => acc + val, 0)
    const noTeams = skill.length / 2
    const skillPerTeam = sum / noTeams
    let totalChemistry = 0, l = 0, r = skill.length-1
    skill.sort((a, b) => a - b)
    while (l < r) {
        if (skill[l] + skill[r] !== skillPerTeam) return -1
        totalChemistry += skill[l++] * skill[r--]
    }
    return totalChemistry
};