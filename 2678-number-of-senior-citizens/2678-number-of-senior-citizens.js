/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let res = 0
    for (const citizen of details) {
        if (+(citizen.at(-4) + citizen.at(-3)) > 60) res++
    }
    return res
};

countSeniors = function(details) {
    return details.filter(deet => +(deet.at(-4) + deet.at(-3)) > 60).length
}