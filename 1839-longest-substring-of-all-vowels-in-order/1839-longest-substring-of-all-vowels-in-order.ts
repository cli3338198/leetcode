function longestBeautifulSubstring(word: string): number {
    let res = 0
    for (let i=0; i < word.length; i++) {
        if (word[i] === 'a') {
            let j = i+1, cnt = 1
            while (j < word.length && word[j-1] <= word[j]) {
                if (word[j-1] !== word[j]) cnt++
                j++
            }
            if (cnt === 5) res = Math.max(res, j - i)
            i = j - 1
        }
    }
    return res
};