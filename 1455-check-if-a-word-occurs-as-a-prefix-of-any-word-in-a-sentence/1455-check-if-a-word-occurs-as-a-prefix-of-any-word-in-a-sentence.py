class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        sentence = sentence.split(" ")
        for i, word in enumerate(sentence):
            if word.startswith(searchWord):
                return i + 1
        return -1
        
        sentence = sentence.split(" ")
        for i in range(0, len(sentence)):
            cur = ""
            for j in range(0, len(sentence[i])):
                cur += sentence[i][j]
                if cur == searchWord:
                    return i + 1
        return -1