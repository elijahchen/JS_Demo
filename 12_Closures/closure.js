function outer(){
    var data = "Closures are ";
    return function inner() {
        var innerData = "awesome";
        return data + innerData;
    }
}

// ============

function counter(){
    var count = 0;
    return function () {
        return ++count;
    }
}

counter1 = counter();
counter1 = counter();
counter2 = counter1();


function classRoom() {
    var instructors = ["Tom" , "Peter"];
    return {
        getInstructors: function () {
            return instructors;
        },
        addInstructor: function (instructor) {
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom();
course1.getInstructors();
course1.addInstructor("Earl");
course1.getInstructors();

course2 = classRoom();
course2.getInstructors();