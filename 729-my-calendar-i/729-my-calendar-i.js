class MyCalendar {
    constructor() {
        this.cal = new Array();
    }
    
    book (start, end) {
        for (let i = 0, n = this.cal.length; i < n; i++)
            if (start < this.cal[i][1] && end > this.cal[i][0])
                return false;
        
        this.cal.push([start, end]);
        return true;
    }
}