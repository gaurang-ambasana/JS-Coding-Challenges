/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const ipv4 = () => {
        const x = queryIP.split('.');
        if (x.length !== 4) return false;
        for (let i = 0; i < x.length; i++) {
            if (x[i] <= 255 && 0 <= x[i] && Number(x[i]).toString() === x[i])
                continue;
            return false;
        }
        
        return "IPv4";
    };
    
    const ipv6 = () => {
        const x = queryIP.split(':');
        if (x.length !== 8) return false;
        const allowedStr = '0123456789abcdef';
        for (let i = 0; i < x.length; i++) {
            if (1 <= x[i].length && x[i].length <= 4 && x[i].toLowerCase().split('').every(c => allowedStr.includes(c)))
                continue;
            return false;
        }
        
        return "IPv6";
    }
    
    const ip4 = ipv4();
    const ip6 = ipv6();
    
    return ip4 ? ip4 : ip6 ? ip6 : "Neither";
};