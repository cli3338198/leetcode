class ParkingSystem {
    lot: [number, number, number];
    
    constructor(big: number, medium: number, small: number) {
        this.lot = [big, medium, small]
    }

    addCar(carType: number): boolean {
        if (this.lot[carType-1] > 0) {
            this.lot[carType-1]--
            return true
        } else {
            return false
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */