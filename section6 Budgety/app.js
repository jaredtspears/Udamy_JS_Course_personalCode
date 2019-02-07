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

  //data structure: (not accessable from the outside)
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

      // we need this if else because if array is empty it will have an error so we need at least 0 to be present in the array. 
      if (data.allItems[type].length > 0 ){
        //ex array on what we want to do: [1, 2, 3, 4, 8]  next ID = 9;
        //ID = [type of Item either 'exp' or 'inc'][last ID] + 1 
        ID = data.allItems[type][data.allItems[type].length -1].id + 1
      } else{
        ID = 0;
      }

      //create new item based on inc or exp type
      if(type === 'exp'){
        newItem = new Expense(ID, desc, val);
      } else if ( type === 'inc'){
        newItem = new Income(ID, desc, val);
      }
      // push to our data structure 
      data.allItems[type].push(newItem); // this uses the data structure and inside the all items we pass type and add newItem to the exp or inc array.
      
      //return the new element
      return newItem;
    },

    // this method is only for testing in the console by: 'budgetController.testing()' you will see what was added to the dataStructure
    testing: function(){
      console.log(data);
    }
  };

})();




// ui controller
var UIController = (function(){

  var DOMstrings = {
    inputType:'.add__type',
    description: '.add__description',
    value:'.add__value', 
    addBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list'
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

    // obj is the same as that we created as a function constructure in the controller, ctrlAddItem function
    addListItem: function(obj, type){
      var htlm, newHtml, element;

      //Create HTML string with placeholder text:
        if (type === 'inc'){
          element = DOMstrings.incomeContainer; //selecting the container element 

          html =   '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        }else if(type === 'exp'){
          element = DOMstrings.expenseContainer;

          html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        }

      //Replace the placeholder text with some actual data:

        //if you look the obj is the budgetController method for Expense or Income ref this.id etc
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description); //needs to be on the newHTML not the old one.
        newHtml = newHtml.replace('%value%', obj.value);

      //Insert the HTML into the DOM

        //we use adjacent before end so that it will append directly after the last element that is rendered:
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); //we want the newHtml because it will aready have the data added


    },

    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();





// global app controller
var controller = (function(budgetCtrl, UICtrl){
  
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
    var input, newItem;
    // 1. Get the filed input data
    input = UICtrl.getInput();

    // 2. add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add the item to the UI
    UICtrl.addListItem(newItem, input.type);

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





