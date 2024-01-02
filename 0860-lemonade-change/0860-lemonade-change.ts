function lemonadeChange(bills: number[]): boolean {
    let fives = 0, tens = 0
    for (const bill of bills) {
        switch (bill) {
            case 5:
                fives++
                continue
            case 10: 
                if (fives === 0) {
                    return false
                }
                fives--
                tens++
                continue
            default:
                if (fives > 0 && tens > 0) {
                    fives--
                    tens--
                } else if (fives >= 3) {
                    fives -= 3
                } else {
                    return false
                }
        }
    }
    return true
};