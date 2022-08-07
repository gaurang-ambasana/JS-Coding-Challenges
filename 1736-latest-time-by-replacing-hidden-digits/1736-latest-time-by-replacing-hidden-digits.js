/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = time => {
    time = time.split(``);
    
    while (time.includes(`?`)) {
        const idx = time.indexOf(`?`);
        
        switch (idx) {
            case 0: {
                if (parseInt(time[1]) > 3)
                    time[0] = 1;
                else time[0] = 2;
                break;
            }
                
            case 1: {
                if (parseInt(time[0]) === 0 || parseInt(time[0]) === 1)
                    time[1] = 9;
                else if (parseInt(time[0]) === 2)
                    time[1] = 3;
                break;
            }
                
            case 3: {
                time[3] = 5;
                break;
            }
            
            case 4: {
                time[4] = 9;
                break;
            }
        }
    }
    
    return time.join(``);
};