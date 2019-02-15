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
    this.percentage = -1; 
  };

  //this calculates:
  Expense.prototype.calcPercentage = function(totalIncome){
    if(totalIncome > 0){
      this.percentage = Math.round((this.value / totalIncome) * 100)
    }else{
      this.percentage = -1
    }
  };

  //this just returns the calcPercentage
  Expense.prototype.getPercengate = function(){
    return this.percentage;
  }

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
    
    deleteItem: function (type, id){
      var ids, index;
          // data.allItems[type][id]; WONT WORK!
          //id= 6
          //ids = [12568]
          //index = 3

      //create new array:
      ids = data.allItems[type].map(function(current){
        return current.id;
      })

      index = ids.indexOf(id);

      if(index !== -1){
        data.allItems[type].splice(index, 1); // we put 1 because we only want to remove 1 item.
      }
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

    calculatePercentages: function (){

      /*
      a =20
      b = 10
      c = 40
      income = 100
      a = 20/100 = 20%
      etc...*/

      data.allItems.exp.forEach(function(cur){
        cur.calcPercentage(data.totals.inc); //have to pass total inc in so we dont get -1
      });
    },

    getPercengates: function(){
      var allPerc;

      allPerc = data.allItems.exp.map(function(cur){
        return cur.getPercengate();
      });
      return allPerc; //returns this array we just made

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
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage'
  };
  
  var formatNumber = function(num, type){
    var numSplit, int, dec, type;
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    
    int= numSplit[0];
    if(int.length > 3){
      int, int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    dec = numSplit[1];
    return(type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
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

          html =   '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        }else if(type === 'exp'){
          element = DOMstrings.expenseContainer;

          html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        }

      //Replace the placeholder text with some actual data:

        //if you look the obj is the budgetController method for Expense or Income ref this.id etc
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description); //needs to be on the newHTML not the old one.
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      //Insert the HTML into the DOM

        //we use adjacent before end so that it will append directly after the last element that is rendered:
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); //we want the newHtml because it will aready have the data added


    },

    //using parent ID not just the child id
    deleteListItem: function(selectorID){
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);  
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
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
      // document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

      //had to ad this so that the percentage text '%' would appear at the top. 
      if(obj.percentage > 0){
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage +'%';
      }else{
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function(percentages){

      var fields;
      fields = document.querySelectorAll(DOMstrings.expensesPercLabel); //this returns a nodeList

      //THIS IS REUSABLE CODE for ANY APP!!!
      var nodeListForEach = function(list, callback){
        for(var i =0; i < list.length; i++){
          callback(list[i], i); //current is the list, and i is the index
        }
      };

      nodeListForEach(fields, function(current, index){

        if(percentages[index] > 0 ){
          current.textContent = percentages[index] + '%'; 
        } else{
          current.textContent = '---';
        }
      });

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

    //using knowledge of bubbling we add listen to container element only because it is the parent 
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

  };

  var updatePercentages = function(){
    //1. calc %s
    budgetCtrl.calculatePercentages();

    //2. read %s from budget controller
    var percentages = budgetCtrl.getPercengates();

    //3. update UI with new %s
      UICtrl.displayPercentages(percentages);


  };

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

      //6. calc and update %
      updatePercentages();
    }

  };

  //this is the method for which the bubling of the event is called for the deletion 
  //we use event because we used it in the addEventListener()
  var ctrlDeleteItem = function (event){

    //moving up from the child of the <i></i> up to the most relevent parent node:
    // console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
    var itemID, splitID, type, ID;

    // not super ideal hard coding like this but it works for this app:
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(itemID){

      //inc-1 will be split up into ['inc', '1']; 
      splitID = itemID.split('-');
      type = splitID[0]; //the first in the newly create array is the type
      ID = parseInt(splitID[1]);   //the second or index 1 is the ID of the array | need to change from a string to a number
      
      //1. delete the item form the Data Structure:
      budgetCtrl.deleteItem(type, ID);

      //2. then delete item from the UI
      UICtrl.deleteListItem(itemID);

      //3. update and show the new budget
      updateBudget(); //same as in CtrlAddItem()
      
      //4. calc and update %
      updatePercentages();
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





// ======area below is for additional notes:=======================
//===========================================================

/*
EVENT BUBBLEING: when even is triggered by element then the exact same event is triggered on all parent elements one at a time... so if you have a P inside a Section inside a Main component  all the way up to the Root... so the triggering is going up the line. 
  - the place where the event is triggered is called the Target element
  - event delegation- if we know  where the event is fired we can attached event handler to the parent element and wait for trigger to bubble up to the parent from the child element.


*/