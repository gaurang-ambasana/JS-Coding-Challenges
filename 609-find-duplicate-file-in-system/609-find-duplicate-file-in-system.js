/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const table = {};
    
    for (let i = 0, n = paths.length; i < n; i++) {
        const [path, ...files] = paths[i].split(` `);
        
        for (let c = 0, n = files.length; c < n; c++) {
            const file = files[c];
            const content = file.match(/\(([^)]+)\)/g);
            
            if (content in table)
                table[content].push(`${path}/${file.split(`(`)[0]}`);
            else table[content] = [`${path}/${file.split(`(`)[0]}`];
        }
    }
    
    return Object.values(table).filter(({ length }) => length > 1);
};