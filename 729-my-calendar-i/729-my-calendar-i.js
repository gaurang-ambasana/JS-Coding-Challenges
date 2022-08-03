
var MyCalendar = function() {
    this.cal = {};
    this.id = -1;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let i = 0, n = Object.values(this.cal).length; i < n; i++)
        if (start < this.cal[i][1] && end > this.cal[i][0])
            return false;
    
    this.cal[++this.id] = [start, end];
    
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */