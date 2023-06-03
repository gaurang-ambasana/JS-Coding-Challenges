type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    subscription: Map<string, Callback[]>;

    constructor() {
        this.subscription = new Map();
    }
    
    subscribe(eventName: string, callback: Callback): Subscription {
        if (this.subscription.has(eventName)) {
            const cbs = this.subscription.get(eventName);
            cbs.push(callback);
        } else {
            this.subscription.set(eventName, [callback]);
        }

        return {
            unsubscribe: () => {
                const cbs = this.subscription.get(eventName);
                cbs.splice(cbs.findIndex(callback), 1);
                this.subscription.set(eventName, cbs);
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any {
        const res = [];
        
        if (this.subscription.has(eventName)) {
            const cbs = this.subscription.get(eventName);
            
            for (const cb of cbs) {
                res.push(cb(...args));
            }
        }

        return res;
    }
}