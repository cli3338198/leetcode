class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount == 0:
            return 0
        q, seen = deque([(0, 0)]), set()
        while q:
            num_coins, val = q.popleft()
            num_coins += 1
            for coin in coins:
                next_val = val + coin
                if next_val == amount:
                    return num_coins
                if next_val < amount:
                    if next_val not in seen:
                        seen.add(next_val)
                        q.append((num_coins, next_val))
        return -1
        
        #
        
        dp = [inf for _ in range(0, amount+1)]
        dp[0] = 0
        for i in range(1, amount+1):
            for coin in coins:
                if coin <= i:
                    dp[i] = min(dp[i], 1 + dp[i-coin])
        return -1 if dp[amount] == inf else dp[amount]
