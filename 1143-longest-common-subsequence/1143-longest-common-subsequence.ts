function longestCommonSubsequence(text1: string, text2: string): number {
    const dp: number[][] = Array.from(text1 + 1, () => Array.from(text2 + 1, () => 0));

    for (let i = 1, n = text1.length + 1; i < n; i++)
        for (let j = 1, x = text2.length + 1; j < x; j++)
            dp[i][j] = text1[i - 1] === text2[j - 1] ?
                dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);

    return dp[text1.length][text2.length];
}