class MyCalendar {
    constructor() {
        this.calendar = [];
    }
    
    book(start, end) {
        if (this.calendar.find(([st, et]) => start < et && end > st))
            return false;
        
        this.calendar.push([start, end]);
        return true;
    }
}