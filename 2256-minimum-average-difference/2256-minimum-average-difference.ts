function minimumAverageDifference(nums: number[]): number {
    let ans = -1, minDiff = Infinity, runningSum = 0, total = nums.reduce((sum, n) => sum + n, 0);

    for (let i = 0, n = nums.length; i < n; i++) {
        runningSum += nums[i];
        
        const rightSum = total - runningSum, 
            leftAvg = Math.floor(runningSum / (i + 1)),
            rightAvg = Math.floor(rightSum / ((i === n - 1) ? 1 : n - i - 1)),
            diff = Math.abs(leftAvg - rightAvg);

        if (diff < minDiff) {
            minDiff = diff;
            ans = i;
        }
    }

    return ans;
}