// ITEM CONTROLLER, UI CONTROLLER, Storage Controller


// const StorageCtrl = (function(){
    
// }());


// ITEM CONTROLLER
const ItemCtrl = (function(){

    // ITEM CONSTRUCTOR

    const item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // DATA STRUCTURE / STATE

    const data = {
        items: [
            {id:0, name:"clothes", money:5000},
            {id:1, name:"food", money:2000},
            {id:2, name:"bike repair", money:3000},
        ],
        currentItem: null,
        totalMoney:0
    }

    return {
        getItem: function(){
            return data.items; // ARRAY
        },
        addItem: function(name, money){
            let ID;
            //  CREATE ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else{
                ID = 0;
            }

            money = parseInt(money);

            // CREATE A NEW ITEM
            newItem = new item(ID, name, money);

            // ADD TO ITEM ARRAY
            data.items.push(newItem);

            return newItem;
       }
    }

}())


// UI CONTROLLER
const UICtrl = (function(){

 const UISelectors = {
    itemList:"#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn:".delete-btn",
    backBtn:".back-btn",
    itemName:"#item-name",
    itemMoney:"#item-money",
 }   


 return {
    populateItemList: function(items){
        let html = "";

        items.forEach(item => {
            html += `<li class="collection-item" id="item-1">
            <strong>${item.name}:</strong> <em>${item.money}$</em>
            <a href="#" class="secondary-content">
                <i class="fa fa-pencil edit-item"></i>
            </a>
          </li> `;
        });

        // Insert list item
        document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    clearEditState: function(){
        document.querySelector(UISelectors.addBtn).style.display = "inline";
        document.querySelector(UISelectors.updateBtn).style.display = "none";
        document.querySelector(UISelectors.deleteBtn).style.display = "none";
        document.querySelector(UISelectors.backBtn).style.display = "none";
    },
    getItemInput: function(){
        return {
            name: document.querySelector(UISelectors.itemName).value,
            money: document.querySelector(UISelectors.itemMoney).value
        }
    },
    addListItem: function(item){
        // Create a li element
        const li = document.createElement("li");

        // ADD class to li
        li.classList = "collection-item";

        // ADD ID 
        li.id = `item-${item.id}`;

        // Insert HTML
        li.innerHTML = `<strong>${item.name}:</strong> <em>${item.money}$</em>
        <a href="#" class="secondary-content">
          <i class="fa fa-pencil edit-item"></i>
        </a>`

        // INSERT ITEM TO UL
        document.querySelector(UISelectors.itemList).appendChild(li);
    }
 }
}())

// APP CONTROLLER

const App = (function(ItemCtrl,UICtrl){

    const loadEventListeners = function(){

        // ADD ITEM EVENT
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);
    }

    const itemAddSubmit = function(e){
        e.preventDefault();
        
        // GET FORM INPUT FROM UI CONTROLLER
        const input = UICtrl.getItemInput();

        if(input.name === "" || input.money === ""){
            alert("Please fill the form")
        } else {
            // ADD ITEM
            const newItem = ItemCtrl.addItem(input.name,input.money);
            
            // ADD ITEM TO UI LIST
            UICtrl.addListItem(newItem);
        }
    }


   return {
    init: function(){

        UICtrl.clearEditState();

        const items = ItemCtrl.getItem();

        if(items.length > 0){
            UICtrl.populateItemList(items);
            document.querySelector(".no-item").style.display = "none";
        } else {
            document.querySelector(".no-item").style.display = "block";
        }

        loadEventListeners();

    }
   }
}(ItemCtrl,UICtrl));


// INTITIALIZE APP
App.init();