function createTape(title, readyToPlay) {
    return {
        title: title,
        readyToPlay: readyToPlay || false,
    }
}

function reset(vhsObject) {
    vhsObject.readyToPlay = true
    return vhsObject
}

function createCollection(vhs1, vhs2, vhs3) {
    var newCollection = []
    if (!vhs1 || !vhs2 || !vhs3) {
        return `Your collection is empty.`
    // vhsObjectArray.forEach((object) => {
    //     newCollection.push(object)
    // })
    } else {
        newCollection.push(vhs1, vhs2, vhs3)
        return newCollection
    }
}

function previewCollection(collectionArray) {
    var collectionTitles = []
    collectionArray.forEach((object) => {
        collectionTitles.push(object.title)
    })
    return collectionTitles
}

module.exports = {
    createTape,
    reset,
    createCollection,
    previewCollection,
  }