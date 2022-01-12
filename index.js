const findMatching = (drivers, driverName) => {
    return drivers.filter(driver => driverName.toUpperCase() === driver.toUpperCase())
}

const fuzzyMatch = (drivers, driverName) => {
    return drivers.filter(driver => driverName.slice(0,2) === driver.slice(0,2))
}

const matchName = (drivers, elementName) => {
    return drivers.filter(driver => elementName === driver.name )
}