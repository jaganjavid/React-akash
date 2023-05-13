// ITEM CONTROLLER, UI CONTROLLER, Storage Controller


const StorageCtrl = (function(){
    return {
        storeItem:function(item){
            let items;

            // CHECK IF ANY ITEMS IN ARRAY
            if(localStorage.getItem("items") === null){

                items = [];

                // PUSH NEW ITEM 
                items.push(item);

                // SET LS
                localStorage.setItem("items", JSON.stringify(items));
                console.log(1);

            } else {

                // GET THE EXISTING DATA FROM LS
                items = JSON.parse(localStorage.getItem("items"));

                // PUSH THE NEW ITEM
                items.push(item)

                // RESET LS
                localStorage.setItem("items", JSON.stringify(items));
                console.log(2);
            }
        },
        getItem: function(){
            let items;

            // CHECK IF ANY ITEMS IN ARRAY
            if(localStorage.getItem("items") === null){

                items = [];

            } else {

                // GET THE EXISTING DATA FROM LS
                items = JSON.parse(localStorage.getItem("items"));

            }

            return items;
        },
        updateItemLS: function(updatedItem){
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem)
                }
            })

            // RESET THE ITEMS ARRAY IN LS
            localStorage.setItem("items", JSON.stringify(items));
        },
        deleteItemLS: function(id){

            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index, 1);
                }
            })

            // RESET THE ITEMS ARRAY IN LS
            localStorage.setItem("items", JSON.stringify(items));
        },
        clearItemLS: function(){
            localStorage.removeItem("items");
        }
    }
}());


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
        // items: [
        //     {id:0, name:"clothes", money:10},
        //     {id:1, name:"food", money:20},
        //     {id:2, name:"bike repair", money:30},
        // ],
        items: StorageCtrl.getItem(),
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
       },
       updateItem: function(name, money){
         money = parseInt(money);

         let found = null;

         data.items.forEach(function(item){
            if(item.id === data.currentItem.id){
                item.name = name,
                item.money = money,
                found = item
            }
         })

         return found;
       },
       deleteItem: function(id){
        // GET IDS
        const ids = data.items.map(function(item){
            return item.id;
        })

        // GET INDEX
        const index = ids.indexOf(id);

        data.items.splice(index, 1);
       },
       clearAllItems: function(){
           data.items = [];
       }
    }

}())


// UI CONTROLLER
const UICtrl = (function(){

 const UISelectors = {
    itemList:"#item-list",
    listItems: ".collection-item",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn:".delete-btn",
    backBtn:".back-btn",
    clearBtn:".clear-btn",
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
    clearInputState: function(){
       document.querySelector(UISelectors.itemName).value = "";
       document.querySelector(UISelectors.itemMoney).value = "";
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
    },
    updateListItem: function(item){
        let listItems = document.querySelectorAll(UISelectors.listItems);

        listItems.forEach(function(listItem){
            const itemID = listItem.getAttribute("id");

            if(itemID === `item-${item.id}`){
                document.querySelector(`#${itemID}`).innerHTML = `
                <strong>${item.name}:</strong> <em>${item.money}$</em>
                <a href="#" class="secondary-content">
                  <i class="fa fa-pencil edit-item"></i>
                </a>`;
            }
        })
    },
    deleteListItem: function(id){
       const itemID = `#item-${id}`;
       const item = document.querySelector(itemID);
       item.remove();
    },
    clearItems: function(){

        // const collection = document.querySelector(UISelectors.itemList);
        // collection.innerHTML = "";

        let listItems = document.querySelectorAll(UISelectors.listItems);

        listItems.forEach(function(item){
            item.remove();
        })
        
    }
 }
}())

// APP CONTROLLER

const App = (function(ItemCtrl,UICtrl,StorageCtrl){

    const loadEventListeners = function(){

        // GET ALL UI SELECTOR
        const UISelectors = UICtrl.getUISelectors();


        // ADD ITEM EVENT
        document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

        // EDIT ICON CLICK EVENT
        document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);

        // ITEM TO UPDATE
        document.querySelector(UISelectors.updateBtn).addEventListener("click", itemUpdateSubmit);

        // ITEM TO DELETE
        document.querySelector(UISelectors.deleteBtn).addEventListener("click", itemDeleteSubmit);

        // ITEM TO BACK
        document.querySelector(UISelectors.backBtn).addEventListener("click", function(e){
            UICtrl.clearEditState();
            UICtrl.clearInputState();
        })

        // ITEMS TO CLEAR
        document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAllItemsClick);
    }


    // ADD ITEM
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

            // ADD TO STORAGE
            StorageCtrl.storeItem(newItem);

            // CLEAR A UI INPUT
            UICtrl.clearInputState();

            document.querySelector(".no-item").style.display = "none";

        }
    }

    // ITEM TO EDIT
    const itemEditClick = function(e){
        e.preventDefault();
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

    // ITEM TO UPDATE

    const itemUpdateSubmit = function(e){
        e.preventDefault();
        // GET ITEM INPUT
        const input = UICtrl.getItemInput();

        // UPDATE ITEM
        const updatedItem = ItemCtrl.updateItem(input.name, input.money);

        // UPDATE UI
        UICtrl.updateListItem(updatedItem);

        // GET TOTAL MONEY
        const totalMoney = ItemCtrl.getTotalMoney();

        // SHOW TOTAL MONET
        UICtrl.showTotalMoney(totalMoney);

        // UPDATE LS
        StorageCtrl.updateItemLS(updatedItem);

        // CLEAR UI UPDATE BUTTON
        UICtrl.clearEditState();

        // CLEAR A UI INPUT
        UICtrl.clearInputState();

    }

    // ITEM TO DELETE
    const itemDeleteSubmit = function(e){
        e.preventDefault();
        
        // GET CURRENT ITEM 
        const currentItem = ItemCtrl.getCurrentItem();

        // DELETE FROM DATE STRUCTURE
        ItemCtrl.deleteItem(currentItem.id);

        // DELETE FROM UI
        UICtrl.deleteListItem(currentItem.id);

        // GET TOTAL MONEY
        const totalMoney = ItemCtrl.getTotalMoney();

        // DELETE FROM LS 
        StorageCtrl.deleteItemLS(currentItem.id);
                
        // SHOW TOTAL MONET
        UICtrl.showTotalMoney(totalMoney);

        // CLEAR UI UPDATE BUTTON
        UICtrl.clearEditState();

        // CLEAR A UI INPUT
        UICtrl.clearInputState();

        const getLength = ItemCtrl.getItem();

        if(getLength.length === 0){
            document.querySelector(".no-item").style.display = "block";
        }

    }

    // ITEM TO CLEAR

    const clearAllItemsClick = function(e){
        e.preventDefault();

        // CLEAR ALL FROM DATA STRUCTURE
        ItemCtrl.clearAllItems();

        // CLEAR ALL FROM UI
        UICtrl.clearItems();

        StorageCtrl.clearItemLS();

        // GET TOTAL MONEY
        const totalMoney = ItemCtrl.getTotalMoney();

        // SHOW TOTAL MONET
        UICtrl.showTotalMoney(totalMoney);

        // RELODE
        window.location.reload();
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
}(ItemCtrl,UICtrl,StorageCtrl));


// INTITIALIZE APP
App.init();