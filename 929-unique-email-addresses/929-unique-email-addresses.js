/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return [...new Set(emails.map(mail => {
        let [local, domainName] = mail.split('@');
        if(local.includes('+')) 
            local = local.substring(0, local.indexOf('+'));
        local = local.replaceAll('.','');
        return [local, domainName].join('@');
    }))].length;
};