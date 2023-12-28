
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
  
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  // applyGiftCard 
}
