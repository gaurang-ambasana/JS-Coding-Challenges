function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tank = 0, lowestIdx = 0, min = 0;

    for (let i = 0, n = gas.length; i < n; i++) {
        tank += gas[i] - cost[i];
        min += gas[i] - cost[i]

        if (min < 0) {
            lowestIdx = i + 1;
            min = 0;
        }
    }

    if (tank < 0) return -1;

    return lowestIdx;
}