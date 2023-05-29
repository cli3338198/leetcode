class ParkingSystem(big: Int, medium: Int, small: Int) {
    val slots = arrayOf(big, medium, small)

    fun addCar(carType: Int): Boolean {
        return slots[carType-1]-- > 0
    }

}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */