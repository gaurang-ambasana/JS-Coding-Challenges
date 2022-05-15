/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = (queryIP) => {
    const ipv4 = () => {
        const x = queryIP.split('.');
        if (x.length !== 4) return false;
        for (let i = 0; i < x.length; i++) {
            if (x[i] <= 255 && 0 <= x[i] && parseInt(x[i]).toString() === x[i])
                continue;
            return false;
        }     
        return true;
    };
    
    const ipv6 = () => {
        const x = queryIP.split(':');
        if (x.length !== 8) return false;
        const allowed = '0123456789abcdef';
        for (let i = 0; i < x.length; i++) {
            if (1 <= x[i].length && 
                x[i].length <= 4 &&
                x[i].toLowerCase().split('')
                .every(c => allowed.includes(c))) continue;
            return false;
        }     
        return true;
    }
    
    const ip4 = ipv4();
    const ip6 = ipv6();
    
    return ip4 ? "IPv4" : ip6 ? "IPv6" : "Neither";
};