document.getElementById("button1").addEventListener("click", loadData);
document.getElementById("button2").addEventListener("click", loadJson);


function loadData(){
    
    // Create an XHR Object

    const xhr = new XMLHttpRequest();

    // OPEN 
    xhr.open("GET", "customer.json", true);

    xhr.onload = function(){

       if(this.status === 200){
        const customer = JSON.parse(this.responseText);
        
        const output = `
        <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone : ${customer.phone}</li>
           
        </ul>
        `;

        document.getElementById("customer").innerHTML = output;
       }
       if(this.status === 404){
        document.getElementById("customer").innerHTML = `<h1>${"Not Found"}</h1>`
       }
       
    }

    xhr.send();
}

function loadJson(){
    
    // Create an XHR Object

    const xhr = new XMLHttpRequest();

    // OPEN 
    xhr.open("GET", "customers.json", true);

    xhr.onload = function(){

       if(this.status === 200){
        const customers = JSON.parse(this.responseText);
        
        let output = "";

        console.log(customers)

        customers.forEach(customer => {

            output += `<ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
             </ul>`
        });

        document.getElementById("customers").innerHTML = output;
       }
       if(this.status === 404){
        document.getElementById("customer").innerHTML = `<h1>${"Not Found"}</h1>`
       }
       
    }

    xhr.send();
}