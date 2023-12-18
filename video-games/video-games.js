function createPlayer(name, age, moveset) {
    return {
        name,
        age,
        moveset,
    }
}

function createLevel(levelName, playersArray) {
    return {
        name: levelName,
        players: playersArray,
        coins: 0,
        lives: 3
    }
}

//input: string and an array of objects
// output: object with two properties, name and players

function findCoins(levelObject, num) {
    // console.log('original coin count: ', levelObject.coins)
    levelObject.coins += num
    // console.log('new coin count: ', levelObject.coins)
    // console.log("level lives: ", levelObject.lives)
    if (levelObject.coins === 100) {
        levelObject.lives ++
    }
    // console.log('new level lives: ', levelObject.lives)
    return levelObject
}

// input: an object and a number
// output: level object with new number of coins

function defeatPlayer(levelObject) {
    // console.log('og life count: ', levelObject.lives)
    levelObject.lives --
    if (levelObject.lives === 0) {
        return `GAME OVER`
    }
    // console.log("life lost: ", levelObject.lives)
    return levelObject
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };