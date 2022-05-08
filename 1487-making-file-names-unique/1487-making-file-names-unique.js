/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const map = {};
    const res = [];
    
    for (const folderName of names) {
        if (folderName in map) {
            let k = map[folderName];
            let name = `${folderName}(${k})`;
            
            while(name in map) {
                k += 1;
                name = `${folderName}(${k})`;
            }
            
            res.push(name);
            map[name] = 1;
            ++map[folderName];
        } else {
            map[folderName] = 1;
            res.push(folderName);
        }
    }
    
    return res;
};