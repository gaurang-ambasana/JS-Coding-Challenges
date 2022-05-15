/**
 * @param {string} queryIP
 * @return {string}
 */
const isIpv4 = (IP) => {
    const x = IP.split('.');
    
    if (x.length !== 4) return false;
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] <= 255 && 0 <= x[i] && parseInt(x[i]).toString() === x[i])
            continue;
        
        return false;
    }     
    
    return true;
};

const isIpv6 = (IP) => {
    const x = IP.split(':').map(s => s.toLowerCase());
    
    if (x.length !== 8) return false;
        
    const range = '0123456789abcdef';
        
    for (let i = 0; i < x.length; i++) {
        if (1 <= x[i].length && x[i].length <= 4 && 
            x[i].split('')
            .every(s => range.includes(s))) continue;
        
        return false;
    }     
    
    return true;
}

const validIPAddress = (queryIP) => isIpv4(queryIP) ? "IPv4" : isIpv6(queryIP) ? "IPv6" : "Neither";