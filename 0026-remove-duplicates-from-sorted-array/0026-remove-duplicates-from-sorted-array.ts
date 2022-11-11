function removeDuplicates(nums: number[]): number {
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return i;
};