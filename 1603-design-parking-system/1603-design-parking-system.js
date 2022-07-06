/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parking = {
        big,
        medium,
        small,
    };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
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
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */