function isValid(s: string): boolean {
    let len: number;

    while (len !== s.length) {
        len = s.length;
        s = s.replace(`()`, ``).replace(`{}`, ``).replace(`[]`, ``);
    }

    return s.length === 0;
}