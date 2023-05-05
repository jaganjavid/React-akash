// ITEM CONTROLLER, UI CONTROLLER, Storage Controller


// const StorageCtrl = (function(){
    
// }());


// ITEM CONTROLLER
const ItemCtrl = (function(){

    // DATA STRUCTURE / STATE

    const data = {
        items: [
            {id:0, name:"clothes", money:5000},
            {id:1, name:"food", money:2000},
            {id:0, name:"bike repair", money:3000},
        ],
        currentItem: null,
        totalMoney:0
    }

    return {
        getItem: function(){
            return data.items; // ARRAY
        }
    }

}())


// UI CONTROLLER
const UICtrl = (function(){
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
        document.querySelector("#item-list").innerHTML = html;
    },
    clearEditState: function(){
        document.querySelector(".add-btn").style.display = "inline";
        document.querySelector(".update-btn").style.display = "none";
        document.querySelector(".delete-btn").style.display = "none";
        document.querySelector(".back-btn").style.display = "none";
    }
 }
}())

// APP CONTROLLER

const App = (function(ItemCtrl,UICtrl){
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

    }
   }
}(ItemCtrl,UICtrl));


// INTITIALIZE APP
App.init();