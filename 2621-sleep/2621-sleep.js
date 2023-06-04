/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, millis)
    }).then(res => res)
}

sleep = async function(millis) {
    const p = await new Promise((res, rej) => {
        setTimeout(res, millis)
    })
    return p
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */