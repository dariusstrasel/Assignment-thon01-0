var dealership = {
    cars: [],
    displayCars: function() {
        if (this.cars.length === 0) {
            console.log("There are no cars!");
        } else {
            console.log(this.cars);
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
        this.cars.slice(position, 1);
    },
    updateCar: function(position, carCategory, carRentalPrice, carIsAvailable) {
        try {
            this.cars[position].carCategory = carCategory;
            this.cars[position].carRentalPrice = carRentalPrice;
            this.cars[position].carIsAvailable = carIsAvailable;
        } catch (e) {
            console.log("Failed:", e);
        }
    },
    toggleAvailability: function(position) {
        this.cars[position].carIsAvailable = !this.cars[position].carIsAvailable;
    },
    getCarsQuantity: function() {
        return this.cars.length;
    },
    isCarTypeAvailable: function(carCategory) {
        debugger;
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
    getCarTypeAvailability: function() {
        debugger;
        typeQuantities = {};
        console.log(Object.keys(this.cars));
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
    },
    rentCar: function(carCategory) {
        this.cars.forEach(function(car, position) {
            if (car.carCategory === carCategory && car.carIsAvailable) {
                console.log("Renting:", car);
                this.toggleAvailability(position);
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