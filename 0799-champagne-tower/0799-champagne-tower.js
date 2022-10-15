/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const dp = [];
  for (let i = 0; i < 101; i++) {
    dp.push(Array(101).fill(0));
  }
  dp[0][0] = poured;
  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= query_glass; j++) {
      const remain = Math.max(dp[i][j] - 1, 0);
      dp[i + 1][j] += remain / 2;
      dp[i + 1][j + 1] += remain / 2;
    }
  }
  return Math.min(dp[query_row][query_glass], 1);
};