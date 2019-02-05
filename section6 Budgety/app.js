/*PSEUDO CODE
First things to do:
- add event handler for button 
- get values from the input field
- add new items to our data structure
- add new item to the UI
- calc budget
- update the UI

Modules: 
- important aspect of robust apps
- keep the units of code for the project cleanly separated and organized
- encapsulates some data into privacy and expose other data publicly

Need to now split the things to do into the modules:

UI Module:
- get input vals
- add new item to the UI
- update the UI

Data Module:
- add new item to our data structure
- calc budget

Controller module: (interacts with both other modules)
- add event handler

Data encapulation allows you to hide aspects of certain modules.
*/

// create the first module with an IEFE (imediately envoced function expression)
var budgetController = (function(){
  
  //constructor for expense
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  //constructor for income
  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  //data structure:
  var data ={
    allItems:{
      exp:[],
      inc:[]
    },
    totals:{
      exp: 0,
      inc:0
    }
  };

  return {
    addItem: function(type, desc, val){
      var newItem, ID;

      //ID = last ID + 1 is what we want
      ID = data.allItems[type][data.allItems[type].length -1]

      if(type === 'exp'){
        newItem = new Expense(ID, desc, val);
      } else if ( type === 'inc'){
        newItem = new Income(ID, desc, val);
      }

      data.allItems[type].push(newItem); // this uses the data structure and inside the all items we pass type and add newItem to the exp or inc array.
      return newItem;
    }
  };


})();




// ui controller
var UIController = (function(){

  var DOMstrings = {
    inputType:'.add__type',
    description: '.add__description',
    value:'.add__value', 
    addBtn: '.add__btn'
  }
  
  // want to make it publicly accessable for the controller module so we place
  //it into a object to accessed:
  return {
    getInput: function(){
      return{
        type : document.querySelector(DOMstrings.inputType).value, //will be inc or exp
        description : document.querySelector(DOMstrings.description).value,
        value : document.querySelector(DOMstrings.value).value,
      };
    }, 
    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();





// global app controller
var controller = (function(bugetCtrl, UICtrl){
  
  // function for all eventListeners
  var setupEventListeners = function(){
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
      //13 is the enter button ... 'which' is for older browsers
      if (event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function(){
    // 1. Get the filed input data
    var input = UICtrl.getInput();

    // 2. add the item to the budget controller

    // 3. Add teh item to the UI

    // 4. Calc budget

    // 5. Display budget on the UI

    
  };

  return {
    init: function(){
      console.log('app has started. ');
      setupEventListeners(); //only set up when init() is called
    }
  }

})(budgetController, UIController);


controller.init(); //without this line nothing will ever happen





