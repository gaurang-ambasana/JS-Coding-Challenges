const maxIceCream = (costs: number[], coins: number): number => costs.sort((a, b) => a - b).reduce((ans, p) => {
    if (p <= coins) {
        coins -= p;
        return ++ans;
    } else {
        costs.length = 0;
        return ans;
    }
}, 0);