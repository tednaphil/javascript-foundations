function createBirthday(name, month, day) {
    return {
        name,
        month,
        day
    }
};

function celebrateBirthday(birthdayArray) {
    var birthdate = `${birthdayArray.month}/${birthdayArray.day}`
    return `Today is ${birthdate}! Happy birthday, ${birthdayArray.name}!`
};


// data: takes in two paramaters [an array of objects and a number that represents the month]
//pseudocode:
//create a birthday count variable that will store the number of bdays that meet the condition to be returned at the conclusion of the function
//check the month of each object in the birthdaysArray [birthdaysArray[i].month?]
//if the object's month is equal to the month passed in as an argument, add 1 (++) to the birthday count variable
//return birthday count [a number] (this value will be assigned to the variable in which the function is being invoked in the test)
function countBirthdays(birthdaysArray, month) {
    var birthdayCount = 0;
    for (var object of birthdaysArray) {
        if (object.month === month) {
            birthdayCount ++
        }
    }
    // birthdaysArray.forEach(function (birthday) {
    //         if (birthday.month === month) {
    //             birthdayCount ++
    //         }
    // } )
    // for (var i = 0; i < birthdaysArray.length; i++) {
        // if (birthdaysArray[i].month === month) {
        //     birthdayCount ++
        // }
    // }
    return birthdayCount
};

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays
  };