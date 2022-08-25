/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let currentDir = {
        x: 0,
        y: 0,
    };
    
    const visited = new Set();
    visited.add("0,0");
    
    for (let i = 0, n = path.length; i < n; i++) {
        switch (path[i]) {
            case `N`: {
                currentDir.y++;
                
                const tmp = Object.values(currentDir).join(`,`);
                
                if (visited.has(tmp))
                    return true;
                
                visited.add(tmp);
                break;
            }
                
            case `S`: {
                currentDir.y--;
                
                const tmp = Object.values(currentDir).join(`,`);
                
                if (visited.has(tmp))
                    return true;
                
                visited.add(tmp);
                break;
            }
                
            case `E`: {
                currentDir.x++;
                
                const tmp = Object.values(currentDir).join(`,`);
                
                if (visited.has(tmp))
                    return true;
                
                visited.add(tmp);
                break;
            }
                
            case `W`: {
                currentDir.x--;
                
                const tmp = Object.values(currentDir).join(`,`);
                
                if (visited.has(tmp))
                    return true;
                
                visited.add(tmp);
                break;
            }
        }
    }
    
    return false;
}