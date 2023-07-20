/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const map = {"G": ["G", 1], "()": ["o", 2], "(a": ["al", 4]}
    let res = ""
    let i = 0
    while (i < command.length) {
        if (command[i] in map) {
            res += map[command[i]][0]
            i += map[command[i]][1]
        }
        if (command[i] + command[i+1] in map) {
            res += map[command[i] + command[i+1]][0]
            i += map[command[i] + command[i+1]][1]
        }
    }
    return res
};

interpret = function(command) {
    return command.replaceAll("()", "o").replaceAll("(al)", "al")
}