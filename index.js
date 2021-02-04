// Code your solution here

function findMatching(drivers, string) {
    let name = string.toLowerCase()
    let driver = drivers.filter(d => {
        return d.toLowerCase() === name
    })
    return driver 
}

function fuzzyMatch(drivers, string) {
    let letters = string 
    let driver = drivers.filter(d => {
        return d[0] === letters[0]
    })
    return driver 
}

function matchName(drivers, string) {
    let name = string 
    let driver = drivers.filter(d => {
        return d.name === name
    })
    return driver 
}