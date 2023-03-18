function greet(firstName, lastName, language){
    

    if(arguments.length === 0){
        console.log("Missing Parameters")
        console.log("-----------");
        return;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);

    console.log("arg[0]:", arguments[0]);
    console.log("arg[1]:", arguments[1]);
    console.log("arg[2]:", arguments[2]);
    console.log("---------------------");

}


greet("Jagan", "Javid", "Tamil");