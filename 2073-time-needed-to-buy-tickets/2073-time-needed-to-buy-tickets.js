/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const q = [...tickets.map((numTickets, idx) => [numTickets, idx])]
    let time = 0
    while (q.length) {
        let [tickets, idx] = q.shift()
        time += 1
        tickets -= 1
        if (idx === k && tickets === 0) return time
        if (tickets > 0) q.push([tickets, idx])
    }
};