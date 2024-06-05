let person = {
    name: "Ari...",
    age: "...11",
    occupation: "...is Awesome, and I am..."
};

console.log(person.name);
console.log(person.occupation);
console.log(person.age);

let car = {
    make: " I have a Toyota",
    model: "Camry...",
    start: function () {
        console.log("...Engine started!");
    }
};
console.log(car.make, car.model)
car.start(); 
let cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Silver",
        features: ["Automatic Transmission", "Touchscreen Infotainment", "Lane Departure Warning"], 
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2022,
        color: "Red",
        features: ["V8 Engine", "Sport Suspension", "Apple CarPlay"],
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2022,
        color: "Blue",
        features: ["Fuel-Efficient Engine", "Honda Sensing Sunroof"],
    }
]
console.log(cars[0].make, cars[0].model, cars[0].year, cars[0].color, cars[0].features)
console.log(cars[1].make, cars[1].model, cars[1].year, cars[1].color, cars[1].features)
console.log(cars[2].make, cars[2].model, cars[2].year, cars[2].color, cars[2].features)