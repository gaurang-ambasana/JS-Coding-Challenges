function canJump(nums: number[]): boolean {
    let max = 0;

    for (let i = 0, n = nums.length; i < n; i++) {
        if (max < i) return false;
        if (nums[i] + i > max) {
            max = nums[i] + i;
        }
    }

    return max >= nums.length - 1;
}