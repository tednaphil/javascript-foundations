function createBirthday(name, month, day) {
    return {
        name,
        month,
        day
    }
};

function celebrateBirthday(birthdayArray) {
    console.log('birthday object.month: ', birthdayArray.month)
    var birthdate = `${birthdayArray.month}/${birthdayArray.day}`
    console.log('birthdate: ', birthdate)
    return `Today is ${birthdate}! Happy birthday, ${birthdayArray.name}!`
};


// data: takes in two paramaters [an array of objects and a number that represents the month]
//pseudocode:
//create a birthday count variable that will store the number of bdays that meet the condition to be returned at the conclusion of the function
//check the month of each object in the birthdaysArray [birthdaysArray[i].month?]
//if the object's month is equal to the month passed in as an argument, add 1 (++) to the birthday count variable
//return birthday count [a number] (this value will be assigned to the variable in which the function is being invoked in the test)
function countBirthdays(birthdaysArray, month) {
    // console.log('birth month: ', birthdaysArray[0].month)
    var birthdayCount = 0;
    for (var i = 0; i < birthdaysArray.length; i++) {
        console.log('Loop Test: ', i)
        if (birthdaysArray[i].month === month) {
            birthdayCount ++
        }
    }
    console.log('birthdayCount:', birthdayCount);
    return birthdayCount//a number
};

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays
  };