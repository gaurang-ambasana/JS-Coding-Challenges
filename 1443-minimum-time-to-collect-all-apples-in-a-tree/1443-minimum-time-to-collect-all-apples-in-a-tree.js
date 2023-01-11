/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = (n, edges, hasApple) => {
    const map = edges.reduce((tree, [from, to]) => {
        if (!tree.has(from))
            tree.set(from, new Set());

        if (!tree.has(to))
            tree.set(to, new Set());

        tree.get(from).add(to);
        tree.get(to).add(from);

        return tree;
    }, new Map());

    let ans = 0;

    function traverse(node, parent) {
        let flag = false;
        const children = map.get(node);

        for (const child of children) {
            if (child !== parent) {
                ans++;
                
                const tmp = traverse(child, node);
                
                if (tmp) ans++;
                else ans--;

                flag = tmp || flag;
            }
        }

        if (hasApple[node]) return true;
        else return flag;
    }

    traverse(0);

    return ans;
}