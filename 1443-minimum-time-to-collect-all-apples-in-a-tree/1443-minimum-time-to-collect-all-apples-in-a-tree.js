/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = (n, edges, hasApple) => {
    const map = new Map();
    let ans = 0;
    
    for (let i = 0; i < n - 1; i++) {
        const [from, to] = edges[i];
        
        if (!map.has(from))
            map.set(from, new Set());

        if (!map.has(to))
            map.set(to, new Set());

        map.get(from).add(to);
        map.get(to).add(from);
    }

    function traverse(node, parent) {
        let flag = false;
        const children = map.get(node);

        for (const child of children)
            if (child !== parent) {
                ans++;
                
                const tmp = traverse(child, node);
                
                tmp ? ans++ : ans--;
                flag = tmp || flag;
            }

        return hasApple[node] ? true : flag;
    }

    traverse(0);

    return ans;
}