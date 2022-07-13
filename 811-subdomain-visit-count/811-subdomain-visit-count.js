/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const count = {};
    
    for (let i = 0, n = cpdomains.length; i < n; i++) {
        const [c, domain] = cpdomains[i].split(` `);
        count[domain] = parseInt(count[domain] ?? 0) + parseInt(c);
        
        const tld = domain.match(/(\.\w+)$/g).join(``).slice(1);
        count[tld] = parseInt(count[tld] ?? 0) + parseInt(c);
        
        if (domain.indexOf(`.`) !== domain.lastIndexOf(`.`)) {
            const sld = domain.match(/(\w+\.\w+)$/g).join(``);
            count[sld] = parseInt(count[sld] ?? 0) + parseInt(c);
        }
    }
    
    return Object.entries(count).map(([domain, visit]) => `${visit} ${domain}`);
};