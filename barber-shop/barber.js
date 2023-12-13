
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
    barber.haircuts.push(haircut);
    barber.earnings += haircut.price;
    return barber
};

function listStyles(barber, length) {
    var styleList = []
    barber.haircuts.forEach((object => {
        if (length === object.hairLength) {
            styleList.push(object.style)
        }
    }))
    return styleList
};


module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
  };