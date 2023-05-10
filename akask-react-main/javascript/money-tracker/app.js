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
            {id:0, name:"clothes", money:10},
            {id:1, name:"food", money:20},
            {id:2, name:"bike repair", money:30},
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
            newItem = new item(ID, name, money); // obj

            // ADD TO ITEM ARRAY
            data.items.push(newItem);

            return newItem;
       },
       getTotalMoney: function(){
         let total = 0;

         if(data.items.length > 0){
             data.items.forEach(function(item){
                total += item.money;

                data.totalMoney = total;
             })
         } else{
            return data.totalMoney = 0;
         }
         return total;
       },
       getItemById: function(id){
          let found = null;

          //LOOP THROUGH ITEMS
          data.items.forEach(function(item){
            if(item.id === id){
                found = item;
            }
          })
          return found;
       },
       setCurrentItem: function(item){
         data.currentItem = item;
       },
       getCurrentItem:function(){
        return data.currentItem;
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
    totalMoney:".total-money"
 }   


 return {
    populateItemList: function(items){
        let html = "";

        items.forEach(item => {
            html += `<li class="collection-item" id=item-${item.id}>
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
    showEditState: function(){
        document.querySelector(UISelectors.addBtn).style.display = "none";
        document.querySelector(UISelectors.updateBtn).style.display = "inline";
        document.querySelector(UISelectors.deleteBtn).style.display = "inline";
        document.querySelector(UISelectors.backBtn).style.display = "inline";
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
        li.className = "collection-item";

        // ADD ID 
        li.id = `item-${item.id}`;

        // Insert HTML
        li.innerHTML = `<strong>${item.name}:</strong> <em>${item.money}$</em>
        <a href="#" class="secondary-content">
          <i class="fa fa-pencil edit-item"></i>
        </a>`;

        // INSERT ITEM TO UL
        document.querySelector(UISelectors.itemList).appendChild(li);
    },
    showTotalMoney:function(total){
      document.querySelector(UISelectors.totalMoney).textContent = total;
    },
    getUISelectors: function(){
        return UISelectors;
    },
    addItemToForm: function(){
        document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
        document.querySelector(UISelectors.itemMoney).value = ItemCtrl.getCurrentItem().money;
    }
 }
}())

// APP CONTROLLER

const App = (function(ItemCtrl,UICtrl){

    const loadEventListeners = function(){

        // GET ALL UI SELECTORs
        const UISelectors = UICtrl.getUISelectors();


        // ADD ITEM EVENT
        document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

        // EDIT ICON CLICK EVENT
        document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);
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

            // GET INPUT MONEY
            const totalMoney = ItemCtrl.getTotalMoney();

            // ADD TOTAL MONEY TO UI
            UICtrl.showTotalMoney(totalMoney);

        }
    }

    const itemEditClick = function(e){
        if(e.target.classList.contains("edit-item")){
            
            const listID = e.target.parentElement.parentElement.id;

            // BREAK INTO AN ARRAY
            const listArr = listID.split("-");   
            
            // GET THE ACTUAL ID
            const id = parseInt(listArr[1]);

            // SHOW ALL BUTTON
            UICtrl.showEditState();

            // GET ITEM
            const itemToEdit = ItemCtrl.getItemById(id);
            
            // SET CURRENT ITEM
            ItemCtrl.setCurrentItem(itemToEdit);

            // ADD ITEM TO FORM
            UICtrl.addItemToForm();

        }
    }


   return {
    init: function(){

        UICtrl.clearEditState();

        const items = ItemCtrl.getItem();

        if(items.length > 0){

            UICtrl.populateItemList(items);

            const totalMoney = ItemCtrl.getTotalMoney();

            UICtrl.showTotalMoney(totalMoney);

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