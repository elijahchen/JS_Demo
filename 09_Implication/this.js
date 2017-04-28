//THIS IS BAD PRACTICE, purely conceptual understanding
// Implicit/Object

var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
};

person.sayHi();
person.determineContext();

person.dog.sayHello();
person.dog.determineContext();

var dog = {
    firstName: "Ruff"
};

person.sayHi.call(dog);

var boy = {
    firstName: "Joe",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + a + "+" + b + "+" + c + "+" + d + " = " + (a+b+c+d);
    }
};

var girl = {
    firstName: "Sue"
};

boy.sayHi();
boy.addNumbers(1,2,3,4);

boy.addNumbers.call(girl,1,2,3,4); // call
boy.addNumbers.apply(girl,[1,2,3,4]); // apply, is identical to call with the inclusion of explicit parameters

var girlCalculate = boy.addNumbers.bind(girl,1,2,3,4);
girlCalculate();

var girlCalculate1 = boy.addNumbers.bind(girl,1,2); // bind, we do not need to know all the arguments upfront
girlCalculate(3,4);

var man = {
    firstName: "Arty",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName)
        }.bind(this),1000)
    }
};

