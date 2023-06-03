declare global { 
    interface Function {
      callPolyfill(context: Record<any, any>, ...args: any[]): any;
	}
}

Function.prototype.callPolyfill = function(context, ...args): any {
    Object.prototype["fn"] = this;
    return context.fn(...args);
}