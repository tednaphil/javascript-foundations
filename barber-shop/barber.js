
function createBarber(name, earnings, haircuts) {
 return {
    name,
    earnings: earnings || 0,
    haircuts: haircuts || []
 }
};

function giveCompliment(haircut) {
 return `This ${haircut.style} looks great!`
}


module.exports = {
    createBarber,
    giveCompliment,
    // cutHair,
    // listStyles
  };