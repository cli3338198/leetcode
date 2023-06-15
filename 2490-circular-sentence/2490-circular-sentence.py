class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        if sentence[0] != sentence[-1]:
            return False
        sentence = sentence.split(" ")
        for i in range(0, len(sentence)):
            cur_word = sentence[i]
            next_word = sentence[i+1] if i+1 < len(sentence) else sentence[0]
            if cur_word[-1] != next_word[0]:
                return False
        return True