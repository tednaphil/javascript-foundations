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

module.exports = {
    createBirthday,
    celebrateBirthday
    // countBirthdays
  };