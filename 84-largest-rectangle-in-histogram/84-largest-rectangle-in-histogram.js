/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = heights => {
    let ans = 0, i = 0;
    
    const arr = [], n = heights.length;
    
    while (i < n) {
        if (!arr.length || heights[i] > heights[arr.at(-1)])
            arr.push(i++);
        else {
            const idx = arr.pop();
            ans = Math.max(ans, heights[idx] * (arr.length ? i - arr.at(-1) - 1 : i));
        }
    }
    
    while (arr.length) {
        const idx = arr.pop();
        ans = Math.max(ans, heights[idx] * (arr.length ? i - arr.at(-1) - 1 : i));
    }
    
    return ans;
}