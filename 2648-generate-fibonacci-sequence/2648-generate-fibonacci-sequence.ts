function* fibGenerator(): Generator<number, any, number> {
    yield 0;
    yield 1;
    
    let a = 0, b = 1;
    
    while (1) {
        const c = a + b;
        [a, b] = [b, c];
        
        yield c;
    }
}