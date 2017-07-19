var dealership = {
    cars: [],
    displayCars: function() {
        if (this.cars.length === 0) {
            console.log("There are no cars!");
        } else {
            this.cars.forEach(function(car) {
                console.log("Category:", "'", car.carCategory, "'", "Rental Price:", car.carRentalPrice, "Available for rent:", car.carIsAvailable);
            })
        }
    },
    addCar: function(carCategory, carRentalPrice) {
        //debugger;
        this.cars.push({
            carCategory: carCategory,
            carRentalPrice: carRentalPrice,
            carIsAvailable: false
        });
        this.displayCars();
    },
    removeCar: function(position) {
        if (this.cars.length === 0) {
            console.log("There are no cars to remove.")
        } else {
            this.cars.slice(position, 1);
        }
    },
    updateCar: function(position, carCategory, carRentalPrice, carIsAvailable) {
        try {
            this.cars[position].carCategory = carCategory;
            this.cars[position].carRentalPrice = carRentalPrice;
            this.cars[position].carIsAvailable = carIsAvailable;
        } catch (e) {
            console.log("Failed to update car:", e);
        }
    },
    toggleAvailability: function(position) {
        this.cars[position].carIsAvailable = !this.cars[position].carIsAvailable;
    },
    getCarsQuantity: function() {
        return this.cars.length;
    },
    isCarCategoryAvailable: function(carCategory) {
        //debugger;
        var result = false;
        if (this.getCarsQuantity() === 0) {
            result = false;
        } else {
            var typeQuantity = 0;
            this.cars.forEach(function(car) {
                if (car.carCategory === carCategory) {
                    typeQuantity++
                }
            });
            if (typeQuantity > 0) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    },
    getAllCarCategoryAvailabilty: function() {
        //debugger;
        typeQuantities = {};
        //console.log(Object.keys(this.cars));
        this.cars.forEach(function(car) {
            Object.keys(car).forEach(function(key) {
                if (key === "carCategory") {
                    if (typeQuantities[car[key]]) {
                        typeQuantities[car[key]] += 1;
                    } else {
                        typeQuantities[car[key]] = 1;
                    }
                }
            });
        })
        if (Object.keys(typeQuantities).length === 0) {
            console.log("There are no cars available to rent.")
        } else {
            Object.keys(typeQuantities).forEach(function(categoryKey) {
                console.log(categoryKey, ":", typeQuantities[categoryKey]);
            })
        }
    },
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