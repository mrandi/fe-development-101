function Robot(name) {
    this.name = name || "unnamed";
    this.sound = "beep";
    // this.speak = function() {
    //     console.log( this.name + ": " + this.sound );
    // };
}

Robot.prototype.speak = function() {
    console.log( this.name + ": " + this.sound );
};

// var hal = new Robot( "hal" ),
//     terminator = new Robot( "terminator" );

// hal.speak();
// terminator.speak();

// hal.prototype = new Array();
// hal.speak();

// var obj = new hal.constructor();
// console.log( obj );

function Nanobot() {
    this.size = "small";
}

Nanobot.prototype = new Robot();

var tiny = new Nanobot();
tiny.speak();
