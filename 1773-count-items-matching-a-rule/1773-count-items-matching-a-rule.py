class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        return sum([1 for type, color, name in items if (ruleKey == "type" and ruleValue == type) or (ruleKey == "color" and ruleValue == color) or (ruleKey == "name" and ruleValue == name)])