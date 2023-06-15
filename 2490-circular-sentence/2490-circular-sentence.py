class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        sentence = sentence.split(" ")
        if len(sentence) == 1:
            return sentence[0][0] == sentence[0][-1]
        else:
            for i in range(0, len(sentence)):
                cur_word = sentence[i]
                next_word = sentence[i+1] if i+1 < len(sentence) else sentence[0]
                if cur_word[-1] != next_word[0]:
                    return False
            return True