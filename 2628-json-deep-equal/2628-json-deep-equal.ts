function areDeeplyEqual(o1: any, o2: any): boolean {
    if (o1 === o2) return true
    if (!o1 || !o2) return false
    if (String(o1) !== String(o2)) return false
    if (Array.isArray(o1)) {
        for (let i=0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) return false
        }
        return true
    } else {
        if (Object.keys(o1).length !== Object.keys(o2).length) return false
        for (const k in o1) {
            if (!areDeeplyEqual(o1[k], o2[k])) return false
        }
        return true
    }
};