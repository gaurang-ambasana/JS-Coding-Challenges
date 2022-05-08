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
            
            map[name] = 1;
            map[folderName]++;
            res.push(name);
        } else {
            map[folderName] = 1;
            res.push(folderName);
        }
    }
    
    return res;
};