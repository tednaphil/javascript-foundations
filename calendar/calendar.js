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
    return monthlyEvents
}

module.exports = { 
    createEvent,
    createCalendar,
    reportMonthlyEvents
 };