function simplifyPath(path: string): string {
    const stack = [], paths = path.split(`/`);

    for (let i = 0, n = paths.length; i < n; i++) {
        const dir = paths[i];
        if (!dir) continue;
        if (dir === '.') continue;
        if (dir === '..') {
            stack.length > 0 && stack.pop();
            continue;
        }
        
        stack.push(dir);
    }

    return '/' + stack.join(`/`);
}