/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return (coordinates[0].charCodeAt(0)-96 + +coordinates[1]) % 2 !== 0
};