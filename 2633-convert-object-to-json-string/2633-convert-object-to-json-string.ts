function jsonStringify(object: any): string {
    const checkTypes = (val: any): string => {
        if (typeof val !== `object`) {
            if (typeof val === `string`) 
                return `"${val}"`;
            
            return `${val}`;
        }
        
        if (val === null)
            return `null`;
        
        if (Array.isArray(val))
            return `${stringifyArr(val)}`;
        
        return `${jsonStringify(val)}`;
    }

    const stringifyArr = (arr: any[]): string => arr.length > 0 ? arr.reduce((ans, e) => ans += `${checkTypes(e)},`, `[`).slice(0, -1) + `]` : `[]`;

    if (typeof object !== `object`)
        return checkTypes(object);
    
    if (object === null)
        return `null`;

    if (Array.isArray(object))
        return stringifyArr(object);

    if (Object.values(object).length === 0)
        return `{}`;

    return Object.keys(object).reduce((ans, key) => ans += `"${key}":${checkTypes(object[key])},`, `{`).slice(0, -1) + `}`;
}