function Person(name){
    this.name = name;
    this.sayHi = function () {
        return "Hi " + this.name;
    }
}

var girl = new Person("Emma");
var boy = new Person("Tobias");

boy.__proto__ === Person.prototype; // true

Person.prototype.isAdult = true;
girl.isAdult; //true
girl.sayHi();

//Refactored
function Person() {
    this.name = name;
}

Person.prototype.sayHi = function () {
    return "Hi " + this.name;
};

var nextGirl = new Person("Elie");
nextGirl.sayHi();


// ================================================

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
};

Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
};

Vehicle.prototype.honk = function () {
    if(this.isRunning){
        return "Beep!";
    }
};

var cooper = new Vehicle("Mini", "Cooper", 2017);