/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = cpdomains => Object.entries(cpdomains.reduce((count, url) => {
    const [c, domain] = url.split(` `);
    count[domain] = parseInt(count[domain] ?? 0) + parseInt(c);
        
    const tld = domain.match(/(\.|\w+)$/g).join(``);
    count[tld] = parseInt(count[tld] ?? 0) + parseInt(c);
        
    if (domain.indexOf(`.`) !== domain.lastIndexOf(`.`)) {
        const sld = domain.match(/(\w+\.\w+)$/g).join(``);
        count[sld] = parseInt(count[sld] ?? 0) + parseInt(c);
    }
    
    return count;
}, {})).map(([domain, visit]) => `${visit} ${domain}`);