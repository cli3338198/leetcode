/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const cnt = [0, 0]
    for (const student of students) {
        cnt[student]++
    }
    let i = 0
    for (i; i < students.length && cnt[sandwiches[i]] > 0; i++) {
        cnt[sandwiches[i]]--
    }
    return students.length-i
};