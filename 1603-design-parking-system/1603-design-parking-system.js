class ParkingSystem {
    constructor (big, medium, small) {
        this.parking = {
            big, medium, small
        };
    }
    
    addCar (carType) {
        if (carType === 1) {
            this.parking.big--;
            return this.parking.big >= 0;
        } else if (carType === 2) {
            this.parking.medium--;
            return this.parking.medium >= 0;
        } else if (carType === 3) {
            this.parking.small--;
            return this.parking.small >= 0;
        }
    }
};