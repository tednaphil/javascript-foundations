
function createBarber(name, earnings, haircuts) {
 return {
    name,
    earnings: earnings || 0,
    haircuts: haircuts || []
 }
};

function giveCompliment(haircut) {
 return `This ${haircut.style} looks great!`
};

function cutHair(barber, haircut) {
    // console.log('haircut argument: ', haircut)
    // console.log('barber argument: ', barber)
    barber.haircuts.push(haircut);
    barber.earnings += haircut.price;
    // console.log("barber's earnings: ", barber.earnings)
    // console.log('haircuts array: ', barber.haircuts)
    return barber
}


module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    // listStyles
  };