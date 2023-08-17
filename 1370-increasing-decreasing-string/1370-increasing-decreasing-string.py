class Solution:
    def sortString(self, s: str) -> str:
        arr, res = [0] * 26, ""
        for c in s:
            arr[ord(c)-97] += 1
        while sum(arr) > 0:
            for i in range(0, len(arr)):
                if arr[i] > 0:
                    arr[i] -= 1
                    res += chr(i+97)
                    break
            for i in range(ord(res[-1])-97+1, len(arr)):
                if arr[i] > 0:
                    arr[i] -= 1
                    res += chr(i+97)
            for i in range(len(arr)-1, -1, -1):
                if arr[i] > 0:
                    arr[i] -= 1
                    res += chr(i+97)
                    break
            for i in range(ord(res[-1])-97-1, -1, -1):
                if arr[i] > 0:
                    arr[i] -= 1
                    res += chr(i+97)
        return res