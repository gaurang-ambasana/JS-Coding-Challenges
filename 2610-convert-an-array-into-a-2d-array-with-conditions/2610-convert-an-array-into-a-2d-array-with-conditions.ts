function findMatrix(nums: number[]): number[][] {
    const ans = [];
    const counter = new Map<number, number>();

    for (let i = 0, n = nums.length; i < n; i++) {
        const num = nums[i];
        const idx = counter.get(num) ?? 0;

        if (ans.length <= idx) ans.push([num]);
        else ans[idx].push(num);

        counter.set(num, idx + 1);
    }

    return ans;
};