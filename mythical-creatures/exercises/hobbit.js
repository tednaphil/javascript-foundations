function createHobbit(name, age) {
  return {
    name: name || `unknown`,
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1
  if (hobbit.age < 33) {
    hobbit.isAdult = false
  }
  if (hobbit.age >= 33) {
    hobbit.isAdult = true
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === `Frodo`) {
    return `Here is the ring!`
  } else {
    return `You can't have it!`
  }
}

function meetPeople(hobbit, people) {
    people.forEach((object) => {
      hobbit.acquaintances.push(object)
    })
    // console.log(hobbit.acquaintances)
    return hobbit
}

function findFriends(hobbit) {
  var friends = []
  hobbit.acquaintances.forEach((object) => {
    if (object.relationship === `friend`) {
      friends.push(object.name)
    }
  })
  // console.log(friends)
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}