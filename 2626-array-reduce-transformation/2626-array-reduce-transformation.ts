type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    for (let i = 0, n = nums.length; i < n; i++)
        init = fn(init, nums[i]);

    return init;
}