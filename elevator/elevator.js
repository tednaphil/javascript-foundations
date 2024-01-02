function createElevator(building, floors, currentFloor, passengers) {
    return {
        building,
        floors,
        currentFloor,
        passengers,
    }
}

function changeFloors(elevator, floor) {
    if (floor === elevator.currentFloor) {
        return `You're already on floor ${floor}!`
    }
    if (floor > elevator.floors) {
        return `Floor ${floor} does not exist!`
    } else {
        elevator.currentFloor = floor
        return `Taking you to floor ${elevator.currentFloor}!`
    }
}

function dropOffPassenger(elevator, passenger) {
    for (var i = 0; i < elevator.passengers.length; i++) {
        if (passenger === elevator.passengers[i]) {
            elevator.passengers.splice(i,1)
        }
    }
    return elevator.passengers
}
module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
 };
