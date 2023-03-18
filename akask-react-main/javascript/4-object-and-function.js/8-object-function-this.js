var b = 5;

function a(){
    const b = "Hola";
    console.log("Statement", this);
    console.log(b);
    this.newVariable = "Hello"; // Its point to window
}
// a();
var b = function(){
    console.log("Exp", this);// Its point to window
}

b();


var c = {
    name: "The C Object",
    log: function(){ // methode
        // console.log(this);  // its points to direct obj
        var self = this;
        self.name = "Updated C Object";
        let setName = function(newName){
            self.name = newName; 
        }

        setName("Updated again, The c object");
    }
}


console.log(c);
c.log();
console.log(c);
