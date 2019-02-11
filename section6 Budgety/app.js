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

  //private function for calc total
  var calcutateTotal = function (type) {
    var sum =0;

    data.allItems[type].forEach(function(cur){
      sum += cur.value; //cur either the inc or the exp obj...on lines 39||46 
    })

    data.totals[type] = sum;
  };


  //data structure: (not accessable from the outside)
  var data ={
    allItems:{
      exp:[],
      inc:[]
    },
    totals:{
      exp: 0,
      inc: 0
    }, 
    budget: 0, 
    percentage: -1 //-1 is something that doesnt exist yet so it wont display. 
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
    
    // this will calc total sum of inc & exp for the budget & the %
    calculateBudget: function(){
      // calc total inc & exp
      calcutateTotal('exp');
      calcutateTotal('inc');

      // calc budget: inc - exp
      data.budget= data.totals.inc - data.totals.exp;

      //calc % of inc that is spent with the exp
        //we use Math.round to round the % 
      if (data.totals.inc > 0){data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else{
        data.percentage = -1; //or nonexistant 
      }

    },

    //this only does one thing ... get the budget
    getBudget: function(){
      return{
        // we will return 4 things: budget, total inc, total exp, 
        budget: data.budget, 
        totalInc: data.totals.inc,
        totalExp: data.totals.exp, 
        percentage: data.percentage
      }
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
    inputDescription: '.add__description',
    inputValue:'.add__value', 
    addBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value', 
    percentageLabel: '.budget__expenses--percentage'
  }
  
  // want to make it publicly accessable for the controller module so we place
  //it into a object to accessed:
  return {
    getInput: function(){
      return{
        type : document.querySelector(DOMstrings.inputType).value, //will be inc or exp
        description : document.querySelector(DOMstrings.inputDescription).value,
        value : parseFloat(document.querySelector(DOMstrings.inputValue).value), //added parseFloat to make it a number not a string.
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

    // public method to clear feilds
    clearFields:function(){
      var fields, fieldsArr;
      
      //querySelectorAll returns a list not an array, so we need to convert it:
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      //because we know slice is part of the prototype under an Array
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(currentEl, indexNum, array){
        currentEl.value = '';
        // indexNum.value = '';

      });

      //should set focus (focus() method) of curser on first input again:
      fieldsArr[0].focus();

    },

    displayBudget: function (obj){
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
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

  var updateBudget = function (){

    // 1. Calc budget
    budgetCtrl.calculateBudget();

    // 2. method returning the budget
    var budget = budgetController.getBudget(); //returns 4 items.
    // 3. Display budget on the UI
    UICtrl.displayBudget(budget); //obj is from getBudget method
  }

  var ctrlAddItem = function(){
    var input, newItem;
    // 1. Get the filed input data
    input = UICtrl.getInput();

    //discription shouldnt be empty && the num should actually be a num in the value input && val > 0
    if (input.description !== "" && !isNaN(input.value) && input.value > 0){
      // 2. add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4 clear fields
      UICtrl.clearFields();

      //5. calculate and update budget
      updateBudget();
    }

  };

  return {
    init: function(){
      console.log('app has started. ');
      //we want it to start out with everything at zero
      UICtrl.displayBudget({
        budget: 0, 
        totalInc: 0,
        totalExp: 0, 
        percentage: -1
      });
      setupEventListeners(); //only set up when init() is called
    }
  }

})(budgetController, UIController);


controller.init(); //without this line nothing will ever happen





