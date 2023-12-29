function createItemStock(name, quantity, price) {
    return {
        name: name || `unknown`,
        quantity: quantity || 0,
        price: price || 1.00
    }
}

function makePurchase(selectedItem, moneyForPurchase) {
    // console.log(selectedItem.price)
    if (moneyForPurchase < selectedItem.price) {
        return `Sorry, you need at least $${selectedItem.price} to make that purchase`
    }
    if (!selectedItem.quantity) {
        return `Sorry, there are none left`
    } else {
        return `Here are your ${selectedItem.name}`
    }
}

function collectChange(looseChange) {
    var total = 0
    looseChange.forEach((coin) =>
    total += coin)
    // console.log(`total post-loop: `, total)
    return total
}

module.exports = {
    createItemStock,
    collectChange,
    makePurchase,
}
