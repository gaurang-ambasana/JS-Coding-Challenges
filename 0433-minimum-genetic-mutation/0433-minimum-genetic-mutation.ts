function minMutation(start: string, end: string, bank: string[]): number {
    const newBank: Set<string> = new Set(bank);
    
    if (!newBank.has(end))
        return -1;
    
    const arr: Array<Array<string | number>> = [[start, 0]];
    
    while (arr.length > 0) {
        const [gene, level] = arr.pop();
        
        if (gene === end)
            return <number>level;
        
        for (const mut of newBank) {
            let diff = 0;
            
            for (let i = 0, n = mut.length; i < n; i++)
                if (mut[i] !== gene[i])
                    diff++;
            
            if (diff === 1) {
                arr.push([mut, <number>level + 1]);
                newBank.delete(mut);
            }
        }
    }
    
    return -1;
}