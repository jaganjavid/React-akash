function greet(firstName, lastName, language){
    return firstName + " " + lastName + " " + "I Speak" + language;  
}

function tamilGreet(language){
    return greet("Jagan", "Javid", language);
}

function EnglishGreet(language){
    return greet("Jagan", "Javid", language);
}


console.log(tamilGreet("TA"));
console.log(EnglishGreet("EN"));
