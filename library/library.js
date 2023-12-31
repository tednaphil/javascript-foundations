function issueCard(name, age) {
    return {
        name,
        age,
        numBooksCheckedOut: 0,
        isChild: age < 12 ? true : false
    }
}

function searchByAuthor(collectionArray, author) {
    var results = [];
    collectionArray.forEach((object) => {
        if (object.author === author) {
            results.push(object)
        }
    })
    if (results.length === 0) {
        return `No book found for search criteria`
    } else {
        return results
    }
}

module.exports = {
    issueCard,
    searchByAuthor,
 };