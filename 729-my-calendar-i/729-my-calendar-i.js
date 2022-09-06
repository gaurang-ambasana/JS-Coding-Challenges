class MyCalendar {
    constructor() {
        this.cal = [];
    }
    
    book(start, end) {
        if (this.cal.find(([st, et]) => start < et && end > st))
            return false;
        
        this.cal.push([start, end]);
        return true;
    }
}