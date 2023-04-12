function simplifyPath(path: string): string {
    const stack: string[] = [];

    const paths = path.split('/');

    for (const dir of paths) {
        if (dir === '.') continue;
        if (dir === '..') {
            stack.length > 0 && stack.pop();
            continue;
        }
        if (dir) {
            stack.push(dir);
        }
    }

    return '/' + stack.join(`/`);
}