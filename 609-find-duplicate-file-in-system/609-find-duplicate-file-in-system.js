var findDuplicate = function(paths) {
    const table = {};
    
    for (let i = 0, n = paths.length; i < n; i++) {
        const [path, ...files] = paths[i].split(` `);
        
        for (let c = 0, n = files.length; c < n; c++) {
            const file = files[c];
            const [fileName, content] = file.split(`(`);
            
            if (content in table)
                table[content].push(`${path}/${fileName}`);
            else table[content] = [`${path}/${fileName}`];
        }
    }
    
    return Object.values(table).filter(({ length }) => length > 1);
};