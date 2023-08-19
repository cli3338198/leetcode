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

countStudents = function(students, sandwiches) {
    let haveNotEaten = 0
    while (students.length) {
        if (students.at(0) === sandwiches.at(0)) {
            students.shift()
            sandwiches.shift()
            haveNotEaten = 0
        } else {
            students.push(students.shift())
            haveNotEaten++
            if (haveNotEaten === students.length) break
        }
    }
    return haveNotEaten
}