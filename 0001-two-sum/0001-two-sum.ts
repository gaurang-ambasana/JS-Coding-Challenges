function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0, n = nums.length; i < n; i++) {
        const diff = target - nums[i];

        if (map.has(diff))
            return [map.get(diff), i];
        else map.set(nums[i], i);
    }
};