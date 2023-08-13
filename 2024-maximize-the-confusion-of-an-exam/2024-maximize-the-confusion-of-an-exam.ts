function maxConsecutiveAnswers(answerKey: string, k: number): number {
    const map: Record<string, number> = {}
    let i = 0
    let res = 0
    for (let j=0; j < answerKey.length; j++) {
        map[answerKey[j]] = map[answerKey[j]] + 1 || 1
        while (Math.min((map["T"] || 0), (map["F"] || 0)) > k) {
            map[answerKey[i++]]--
        }
        res = Math.max(res, j - i + 1)
    }
    return res
};