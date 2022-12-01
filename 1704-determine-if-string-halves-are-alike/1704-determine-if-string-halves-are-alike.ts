function halvesAreAlike(s: string): boolean {
    return s.slice(0, s.length / 2).replace(/[^aeiou]/ig, ``).length === s.slice(s.length / 2).replace(/[^aeiou]/ig, ``).length;
}