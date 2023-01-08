function maxPoints(points: number[][]): number {
    let maxPoints = 1;

    function getLineEqn(x1: number, y1: number, x2: number, y2: number): string | number {
        const y = y2 - y1, x = x2 - x1;

        if (x === 0 && y !== 0) 
            return x2;

        const prefix = y / x;
        const c = (-x1 * prefix) + y1;

        return `y=${prefix}x+${c}`;
    }

    for (let i = 1, n = points.length; i < n; i++) {
        let max = 0;

        const [x1, y1] = points[i], lines: { [index: string]: number } = {};

        for (let j = 0; j < i; j++) {
            const [x2, y2] = points[j];
            const lineEqn = getLineEqn(x1, y1, x2, y2);

            lines[lineEqn] = (lines[lineEqn] ?? 1) + 1;

            if (lines[lineEqn] > max)
                max = lines[lineEqn];
        }

        if (max > maxPoints)
            maxPoints = max;
    }

    return maxPoints;
}