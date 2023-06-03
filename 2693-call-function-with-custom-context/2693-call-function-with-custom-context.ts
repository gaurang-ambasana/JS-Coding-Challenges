declare global { 
    interface Function {
      callPolyfill(context: Record<any, any>, ...args: any[]): any;
	}
}

Function.prototype.callPolyfill = function(context, ...args): any {
    Object.prototype["fn"] = this;
    const res = context.fn(...args);
    delete Object.prototype["fn"];
    return res;
}