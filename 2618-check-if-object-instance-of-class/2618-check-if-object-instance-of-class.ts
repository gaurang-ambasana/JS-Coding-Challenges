function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if ([null, undefined].includes(obj) || typeof classFunction !== 'function')
        return false;
    
    return Object(obj) instanceof classFunction;
}