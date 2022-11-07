var kClosest = (points: number[][], k: number): number[][] => points.sort(([x1, y1], [x2, y2]) => Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) - Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))).slice(0, k);