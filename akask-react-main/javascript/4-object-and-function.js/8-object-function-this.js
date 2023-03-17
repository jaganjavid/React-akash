var b = 5;

function a(){
    const b = "Hola";
    console.log("Statement", this);
    console.log(b);
    this.newVariable = "Hello"; // Its point to window
}
// a();
var b = function(){
    console.log("Exp", this);
}

b();


var c = {
    name: "The C Object",
    log: function(){
        // console.log(this);  // its points to direct obj
        this.name = "Updated C Object";
    }
}


console.log(c);
c.log();
console.log(c);