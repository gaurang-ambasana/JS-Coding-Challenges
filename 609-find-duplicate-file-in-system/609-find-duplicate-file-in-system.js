var findDuplicate = function(paths) {
    const table = {};
    
    for (let i = 0, n = paths.length; i < n; i++) {
        const [path, ...files] = paths[i].split(` `);
        
        for (let j = 0, n = files.length; j < n; j++) {
            const file = files[j];
            const [fileName, content] = file.split(`(`);
            
            if (content in table)
                table[content].push(`${path}/${fileName}`);
            else table[content] = [`${path}/${fileName}`];
        }
    }
    
    return Object.values(table).filter(({ length }) => length > 1);
};