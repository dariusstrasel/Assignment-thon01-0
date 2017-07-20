var dealership = {
    cars: [],
    categories: ['sedan', 'suv', 'sportscar'],
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
    updateCar: function(position, carKey, keyValue) {
        try {
            console.log("Changing", this.cars[position], carKey, "from", this.cars[position][carKey], "to", keyValue);
            this.cars[position][carKey] = keyValue;
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
        categoryQuantities = {};
        //console.log(Object.keys(this.cars));
        this.cars.forEach(function(car) {
            Object.keys(car).forEach(function(key) {
                if (key === "carCategory") {
                    if (categoryQuantities[car[key]]) {
                        categoryQuantities[car[key]] += 1;
                    } else {
                        categoryQuantities[car[key]] = 1;
                    }
                }
            });
        })
        if (Object.keys(categoryQuantities).length === 0) {
            console.log("There are no cars available to rent.")
        } else {
            Object.keys(categoryQuantities).forEach(function(categoryKey) {
                console.log(categoryKey, ":", categoryQuantities[categoryKey]);
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
    },
    generateCategory: function(){
        return this.categories[Math.floor((Math.random() * 3) + 0)];
    },
    carFactory: function*() {
        while(true)
            yield {'carCategory': this.generateCategory(), 'carRentalPrice': Math.floor((Math.random() * 1000) + 10)}
    },
    populateInventory: function(quantity) {
        var generator = this.carFactory();
        for (var index = 0; index < quantity; index++){
            var car = generator.next().value;
            this.addCar(car.carCategory, car.carRentalPrice);
        }
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