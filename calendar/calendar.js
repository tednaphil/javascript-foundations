function createEvent(title, month, day) {
    if (day > 31 || day < 1) {
        return `Error: ${day} is not a valid day`
    } else {
        return {
         title,
         month,
         day
        }
     }
}

function createCalendar(owner, eventsArray) {
    return {
        owner,
        events: eventsArray
    }
}

function reportMonthlyEvents(calendarObject, month) {
    var monthlyEvents = []
    calendarObject.events.forEach((object) => {
        if (month === object.month) {
            monthlyEvents.push(object)
        }
    })
    // console.log(calendarObject.events)
    return monthlyEvents
}

// output: array of objects
//declare a variable to store the monthly events
// if the month is included in the calendar object, push to monthly events array

module.exports = { 
    createEvent,
    createCalendar,
    reportMonthlyEvents
 };