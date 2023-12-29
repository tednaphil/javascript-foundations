
function createCustomer(name, bill, bookingsArray) {
  return {
    name,
    bill,
    bookings: bookingsArray || []
  }
};

function greeting(customerObject) {
  if (customerObject.bookings.length > 0) {
    return `${customerObject.name}! Welcome back to Happy Spa`
  } else {
    return `${customerObject.name}! Welcome to Happy Spa`
  }
};

function createService(serviceName, cost) {
  if (serviceName) {
    return {
      name: serviceName,
      cost,
    }
  } else {
    return `Please provide service name and cost.`
  }
};

function bookServices(customerObject, serviceObject) {
  // var newBookings = customerObject.bookings
  customerObject.bookings.push(serviceObject.name)
  customerObject.bill += serviceObject.cost
  // console.log(newBookings)
  return customerObject
};

function applyGiftCard(servicesArray, giftCardAmount) {
  affordableServices = []
  console.log(`affordableServices before loop:`, affordableServices)
  servicesArray.forEach((object) => {
    if (object.price <= giftCardAmount) {
      affordableServices.push(object.name)
    }
  })
  console.log(`affordableServices after loop:`, affordableServices)
  return affordableServices
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
