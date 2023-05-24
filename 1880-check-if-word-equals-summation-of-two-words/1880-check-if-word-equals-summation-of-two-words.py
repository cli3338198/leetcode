class Solution:
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        def helper(word: str) -> int:
            abc = 'abcdefghijklmnopqrstuvwxyz'
            res = ''
            for c in word:
                for i in range(0, len(abc)-1):
                    if c == abc[i]:
                        res += str(i)
                        break
            while res and res[0] == "0":
                res = res[1::]
            return int(res) if res else 0
        
        return helper(firstWord) + helper(secondWord) == helper(targetWord)