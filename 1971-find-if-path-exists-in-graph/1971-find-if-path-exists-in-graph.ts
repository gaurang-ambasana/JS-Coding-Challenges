function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const map = new Map<number, Set<number>>(), 
    visited = new Set<number>();
    
    function traverse(node: number): boolean {
        if (node === destination) return true;
        if (visited.has(node)) return false;

        visited.add(node);

        for (const next of map.get(node))
            if (traverse(next))
                return true;
        
        return false;
    }

    for (const [src, dst] of edges) {
        !map.has(src) && map.set(src, new Set());
        !map.has(dst) && map.set(dst, new Set());

        map.get(src).add(dst);
        map.get(dst).add(src);
    }

    return traverse(source);
}