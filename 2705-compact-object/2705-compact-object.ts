type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj))
        obj = obj.filter(Boolean);
    else
        for (const prop in obj)
            if (!obj[prop]) delete obj[prop];

    for (const prop in obj)
        if (typeof obj[prop] === 'object')
            obj[prop] = compactObject(obj[prop]);

    return obj;
}