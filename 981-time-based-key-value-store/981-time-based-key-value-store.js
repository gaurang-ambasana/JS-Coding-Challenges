class TimeMap {
    constructor() {
         this.map = {};
    }
    
    set(key, value, timestamp) {
        if (key in this.map)
            this.map[key].push([timestamp, value]);
        else this.map[key] = [[timestamp, value]];
    }
    
    get(key, timestamp) {
        if (!(key in this.map))
            return ``;
        
        if (timestamp < this.map[key][0][0])
            return ``;
        
        let left = 0, right = this.map[key].length;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            if (this.map[key][mid][0] <= timestamp)
                left = mid + 1;
            else right = mid;
        }
        
        if (right === 0)
            return ``;
        
        return this.map[key][right - 1][1];
    }
}