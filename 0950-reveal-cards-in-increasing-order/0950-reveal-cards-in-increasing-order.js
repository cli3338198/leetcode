/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => {return b - a})
    const res = [deck.shift()]
    for(const card of deck) {
        res.unshift(res.pop())
        res.unshift(card)
    }
    return res
};