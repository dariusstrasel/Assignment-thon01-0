var dealership = {
    // Car Inventory
    cars: [],
    // Show all cars
    displayCars: function() {
        if (this.getCarsQuantity() === 0) {
            console.log("There are no cars!");
        } else {
            this.cars.forEach(function(car) {
                console.log("Category:", "'", car.carCategory, "'", "Rental Price:", car.carRentalPrice, "Available for rent:", car.carIsAvailable);
            })
        }
    },
    // Add car
    addCar: function(carCategory, carRentalPrice) {
        //debugger;
        this.cars.push({
            carCategory: carCategory,
            carRentalPrice: carRentalPrice,
            carIsAvailable: false
        });
        this.displayCars();
    },
    // Remove car
    removeCar: function(position) {
        if (this.getCarsQuantity() === 0) {
            console.log("There are no cars to remove.")
        } else {
            this.cars.slice(position, 1);
        }
    },
    // Change car
    updateCar: function(position, carKey, keyValue) {
        try {
            console.log("Changing", this.cars[position], carKey, "from", this.cars[position][carKey], "to", keyValue);
            this.cars[position][carKey] = keyValue;
        } catch (e) {
            console.log(e.name);
            console.log("Failed to update car:", e);
        }
    },
    // Flip availability (rent) status
    toggleAvailability: function(position) {
        this.cars[position].carIsAvailable = !this.cars[position].carIsAvailable;
    },
    // Show the total number of cars
    getCarsQuantity: function() {
        return this.cars.length;
    },
    // Amount of category available
    isCarCategoryAvailable: function(carCategory) {
        var result = false;
        if (this.getCarsQuantity() === 0) {
            result = false;
        } else {
            var availableCars = this.cars.filter(function(car) {
                if (car.carCategory === carCategory) {
                    return car
                }
            });
            if (availableCars) {
                result = true;
            }
        }
        return result;
    },
    isCarKeyValuePresent: function(key, keyVale) {
        var result = false;
        if (this.getCarsQuantity() === 0) {
            result = false;
        } else {
            var matchingCars = this.cars.filter(function(car) {
                if (car[key] === keyVale) {
                    return car
                }
            });
            if (matchingCars.length !== 0) {
                result = true;
            }
        }
        return result;
    },
    // Show available cars for category
    getAllCarCategoryAvailabilty: function() {
        //debugger;
        if (this.getCarsQuantity() === 0) {
            console.log("There are no cars stocked in inventory.")
            return
        }
        categoryQuantities = {};
        //console.log(Object.keys(this.cars));
        this.cars.forEach(function(car) {
            if (car.carIsAvailable) {
                Object.keys(car).forEach(function(key) {
                    if (key === "carCategory") {
                        if (categoryQuantities[car[key]]) {
                            categoryQuantities[car[key]] += 1;
                        } else {
                            categoryQuantities[car[key]] = 1;
                        }
                    }
                });
            }
        })
        if (Object.keys(categoryQuantities).length === 0) {
            console.log("There are no cars available to rent.")
        } else {
            Object.keys(categoryQuantities).forEach(function(categoryKey) {
                console.log(categoryKey, ":", categoryQuantities[categoryKey]);
            })
        }
    },
    // Rent a car in inventory
    rentCar: function(carCategory) {
        this.cars.forEach(function(car, position) {
            if (car.carCategory === carCategory && car.carIsAvailable) {
                console.log("Renting:", car);
                this.toggleAvailability(position);
            } else {
                console.log("There are no '", carCategory, "' cars available to rent.")
            }
        })
        this.displayCars();
    }
}

// var handlers = {
//     createCarNode: function() {
//         var carLi = document.createElement("li")
//         return carLi;
//     },
//     displayCars: function() {
//         dealership.cars.forEach(function(car) {
//             document.getElementById("")
//         });
//     }
// }