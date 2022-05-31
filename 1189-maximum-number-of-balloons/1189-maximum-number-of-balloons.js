/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = text => {
    const balloon = {
        'b' : 0,
        'a' : 0,
        'l' : 0,
        'o' : 0,
        'n' : 0,
    };
    
    for (const char of text) {
        switch (char) {
            case 'b' : {
                ++balloon['b'];
                break;
            }
                
            case 'a' : {
                ++balloon['a'];
                break;
            }
                
            case 'l' : { 
                ++balloon['l'];
                break;
            }
                
            case 'o' : {
                ++balloon['o'];
                break;
            }
                
            case 'n' : { 
                ++balloon['n'];
                break;
            }
        }
    }
    
    balloon['l'] = Math.floor(balloon['l'] / 2);
    balloon['o'] = Math.floor(balloon['o'] / 2);
    
    return Math.min(...Object.values(balloon));
};