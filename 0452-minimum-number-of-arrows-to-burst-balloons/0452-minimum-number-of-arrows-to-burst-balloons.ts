function findMinArrowShots(points: number[][]): number {
    points.sort(([start1,], [start2,]) => start1 - start2);
    let arrows = 1, lastPoint = points[0][1];

    for (let i = 1, n = points.length; i < n; i++) {
        const [start, end] = points[i];

        if (start > lastPoint) {
            arrows++;
            lastPoint = end;
        } else lastPoint = Math.min(lastPoint, end);

    }

    return arrows;
}