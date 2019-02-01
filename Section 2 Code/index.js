// // var mutation and type coercion 

// var fName = 'john';
// var age = '24';

// // type coercion
// console.log(fName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(fName + ' is a  ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // var mutionation 
// age = 'twenty eight';
// job = 'driver';

// // alert(fName + ' is a  ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // var LName = prompt('What is his last Name?');
// // console.log(fName + ' ' + LName);

// // basic operators:
// var year, yearJohn, yearMark;
// var now = 2019;
// ageJohn = 28;
// ageMark = 33;

// // math operators:
// var yearJohn = now - ageJohn;
// var yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// // add multiply divide:
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10); 

// //logical operators 
// var johnOlder  = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john');
// var x;
// console.log(typeof x);  


// // operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge)

// // grouping
// var ageJohn = now - yearJohn ;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //multiple assignments  neat stuff because using the table of precedence the = goes from right to left so you can have a line like that on line 72
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6  // 26
// console.log(x, y);

// x *= 2;
// console.log(x);

// x += 10;   //SAME AS :   x = x + 10;
// console.log(x);

// // all three of the below are the same:
// x = x + 1; 
// console.log(x);
// x += 1;
// console.log(x);
// x ++; 
// console.log(x);


// *****************************Coding Challenge 1 *****************************
//******************************************************************************

// var markMass = 60;
// var johnMass = 45;

// var markHeight= 1.5;
// var johnHeight = 2;


// var markBMI = markMass / (markHeight * markHeight); //60 / 1.5 * 1.5 // 60 / 2.25
// console.log(markBMI);
// var johnBMI = markMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// var higherBMI = false;

// higherBMI = johnBMI < markBMI;


// console.log('John has a lower BMI than Mark\'s BMI? ' + higherBMI);

//********************************************************************************
//********************************************************************************

// var fName = 'John';
// var civilStatus = 'single';

// // civil status is single defined above so he is single
// if (civilStatus === 'married'){
//   console.log(fName + ' is married!');
// } else{
//   console.log(fName + ' is single!')
// };

// // create var for is married being true, and if it is true John is married else he is single
// var isMarried = true;
// if (isMarried){
//   console.log(fName + ' is married!');
// } else{
//   console.log(fName + ' is single!')
// };


// // **********redo Coding Challenge 1 with IF/ ELSE statement:********
// var markMass = 60;
// var johnMass = 45;

// var markHeight= 1.5;
// var johnHeight = 2;


// var markBMI = markMass / (markHeight * markHeight); //60 / 1.5 * 1.5 // 60 / 2.25
// console.log(markBMI);
// var johnBMI = markMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// var higherBMI = false;

// if (markBMI > johnBMI){
// console.log('Mark\'s BMI is higher than John\'s ');
// }else{
//   console.log('John\'s BMI is higher than Mark\'s ');

// }
//********************************************************************************


// && must have both variables or arguments to be 'true'
// || must have 1 of the 2 argumements to be 'true'
// ! inverts 'true'/'false' values. 

// var fName = 'John';
// var age = 20;

// if (age < 13) {
//   console.log(fName + 'is a boy!');
// } else if (age >= 13 && age < 20){ // saying if the age is greater than or = to 13 && also less than 20;
//   console.log(fName + 'is a teenager!')
// }else if (age >= 20 && age < 30){
//   console.log(fName + ' is a young man!')
// }else {
//   console.log(fName + ' is a man!')
// }

// ************* Ternary Operator and SWITCH Statement *******************

// var fName = 'John';
// var age = 16;

// //  Ternary operator: the ':' is the switch of the if else  the below statement is this:
// // Is the age of John greater or equal to 18? If so drinks beer, otherwise you will drink juice.
// age >= 18 ? console.log(fName + ' drinks beer!')
// : console.log(fName + ' drinks juice!' );

// // Ternary operator: if age is greater or equal to 18 it will be beer, otherwise it will be juice
// var drink = age >= 18 ? 'beer': 'juice';
// console.log(drink);

// // this is the same as the ternary operator above just with more lines of code
// if (age >= 18){
//   var drink = 'beer';
// }else{
//   var drink = 'juice';
// }

// // switch statement:
// var job= 'instructor';

// switch(job){
//   case 'web developer':
//   case 'instructor':
//     console.log(fName + ' teaches web dev');
//     break;
//   case 'driver':
//     console.log(fName + ' driver for fedex');
//     break;
//   case 'cook':
//     console.log(fName + ' has successful restaurant');
//     break;
//   default:
//   console.log(fName + ' does something else');
// }

// // changing from if else statement to switch
// switch(true){
//   case age < 13:
//       console.log(fName + ' is a boy.');
//     break;
//     case age >= 13 && age < 20:
//      console.log(fName + ' is a teenager.');
//     break;
//     case age >= 20 && age <30:
//       console.log(fName + ' is a young man.');
//     break;
//     default:
//      console.log(fName + ' is a man.');
// }

// ****************Truthy and Falsy values: ************************************
  // falsy values: undefined, null, 0, '', NaN
  // truthy values: NOT falsy values

// var height;
// height= 23;

// // we check if it is defined or zero which we say it is defined as equal to height which is true
//  if(height || height === 0){ 
//    console.log('var is defined');
//  } else{
//    console.log('var has not been defined')
//  }

// //  == converts string to number and says they are the same - so it is true:
//  if (height == '23'){
//    console.log('the == operator does type coercion!')
//  }

// ********************************************************************************************
// ********************************************************************************************
//                               Coding challenge #2:


// arrays for game scores for each team
// var jGameScores = [120, 103, 89];
// var mGameScores = [116, 94, 123];
// var maryGameScores = [97, 134, 105]; //bonus


// // define var for average 
// var jTeamAvg = (jGameScores[0] + jGameScores[1] + jGameScores[2]) / 3;
//   console.log('John\'s team\'s average: ' + jTeamAvg);
// var mTeamAvg = (mGameScores[0] + mGameScores[1] + mGameScores[2]) / 3;
//   console.log('Mark\'s team\'s average: ' + mTeamAvg);
// var maryTeamAvg = (maryGameScores[0] + maryGameScores[1] + maryGameScores[2]) / 3;
//   console.log('Mary\'s team\'s average: ' + mTeamAvg);

//   if (jTeamAvg > mTeamAvg && jTeamAvg > maryTeamAvg){
//     console.log('John\'s team has the highest average score!');
//   } else if (mTeamAvg > jTeamAvg && mTeamAvg > maryTeamAvg) {
//     console.log('Mike\'s average is the highest!');
//   }else if (maryTeamAvg > jTeamAvg && maryTeamAvg > mTeamAvg) {
//     console.log('Mary\'s average is the highest!');
//   } else {
//     console.log('there is a draw!');
//   }


/*if(jTeamAvg > mTeamAvg){
  console.log('John\'s team had the higher average');
} else if(mTeamAvg > jTeamAvg) {
  console.log('Mark\'s team had the higher average');
} else if (mteamAvg && maryTeamAvg > jTeamAvg){
  console.log('both Mary and Mark have higher team averages than John.');
} else{
  console.log('The averages are equal!');
} */


// ********************************************************************************************
//                             functions:

// function calculateAge(birthYear){
//   return 2018 - birthYear;
// }
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// //this function is called 3 times below:
// function yrsTilRetirement(Year, fName){
//   // functions can call other funtions:
//   var age = calculateAge(Year);
//   var retirement = 65 - age;

//   if(retirement > 0 ) {
//     console.log(fName + ' retires in ' + retirement + ' years.');
//   } else{
//     console.log(fName + ' is already retired!')
//   }
// }

// yrsTilRetirement(1990, 'John');
// yrsTilRetirement(1948, 'Mike');
// yrsTilRetirement(1969, 'John');



// ***************function Statements and expressions:****************
//******************************************************************** 

    //statements -do things but they do not have immediate results - like if else statements or for(loops);
    //expressions - can be called and always produce a value = doesnt matter how long they are it only matters that they
      //produce a single value.

//function declaration:
    // function whatDoYouDo(job, fName){ }

//this is a function expression:
  // var whatDoYouDo = function(job, fName){
  //   switch(job){
  //     case 'teacher':
  //      return fName + ' teaches kids how to code.';
  //     // break; does not need a break because the function finishes after it is returned above
  //     case 'driver':
  //      return fName + ' drives around town.';
  //     case 'designer':
  //       return fName + ' designs beautiful websites.'
  //     default:
  //       return fName + ' does something else.'
  //   }
  // }

// console.log (whatDoYouDo('teacher', 'Peter'));
// console.log (whatDoYouDo('designer', 'Paula'));
// console.log (whatDoYouDo('retired', 'Joe'));


// *******************************************************************************
// ******************************ARRAYS!!!!!**************************************
// *******************************************************************************

// var names = ['Joe', 'Peter', 'James'];
// var years = new Array(1990, 1969, 1948); //this is an alternative to line 354

// console.log(names);
// console.log(names[2]);
// console.log(names.length);

// // easily add into an array:
// names[1] = 'Ben';
// console.log(names);

// // mutate array data:
//   // use the .length to add to the end of the array:
// names[names.length] = 'Mary';
// console.log(names)

// // different data types

// var john = [ 'John', 'Smith', 1990, 'teacher', false];


//   john.push('purple'); //adds at the end of the array
//   john.unshift('Mr.') //adds at the beginning of the array
//   console.log(john);

//   john.pop(); //removes last element in array
//   console.log(john);

//   john.shift(); //removes the first element in the array
//   console.log(john);

//   console.log(john.indexOf(1990)); //returns where in the array that element is

//  console.log(john.indexOf(23));  // this num is not in the array so it is neg 1 (this is to test if something is in an array)

// //  very easy test to run for checking an array!
//  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : ' John IS a designer';
//    console.log(isDesigner);

// *************************CODING CHALLENGE 3 ***************************************


// function tipCalculator(bill){
//   var percentage; //declare the var here for percentage

//   if(bill < 50){
//     percentage = .2;
//   } else if(bill >= 50 && bill < 200 ) {
//     percentage = .15;
//   } else {
//     percentage = .10;
//   }

//   // you have to then return the % times the bill:
//   return percentage * bill;
// }
// var bills = [124, 48, 268];
// var Tips = [tipCalculator(bills[0]), 
//             tipCalculator(bills[1]), 
//             tipCalculator(bills[2])
//           ];

// var finalValues = [bills[0] + Tips[0],
//                    bills[1] + Tips[1],
//                    bills[2] + Tips[2]
//                   ] 
// console.log(Tips, finalValues);

// now testing this you can see that whatever argument you put in you get back the correct percentage:
// console.log (tipCalculator(10));
//****************************************************************************************
//****************************************************************************************

// OBJECTS and properties

// // object literal
// var john = {
//   fName: 'John', 
//   lName: 'Wood',
//   birthYear: 1990, 
//   family:['Lucy', 'Mark', 'Emily', 'Bobby'], 
//   job: 'teacher', 
//   isMarried: false
// };

// console.log(john.fName);
// console.log(john['lName']); //another way to pull out the data from the object

// var x = 'birthYear';
//  console.log(john[x]); //can also do it by delcaring a variable related to the object property 

// //  mutating and changing data in the object:
//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);


// //  creating a new object and filling it manually with new Object() syntax:
//  var jane = new Object();

//  jane.fName = 'jane';
//  jane.birthYear = 1980;
//  jane['lName']  = "Smith";
//  console.log(jane);

//****************************************************************************************
// ************OBJECTS and Methods**********************
  //only objects have methods, arrays functions to change them (push() pop() ect) but they do not have methods 


//  var john = {
//     fName: 'John', 
//     lName: 'Wood',
//     birthYear: 1992, 
//     family:['Lucy', 'Mark', 'Emily', 'Bobby'], 
//     job: 'teacher', 
//     isMarried: false, 
//     calcAge: function(birthYear) {
//       this.age = 2018 - this.birthYear; //THIS  calls the the parent of the object and declares the scope of this to be under john object
//     }
//   };

//   john.calcAge();
//   console.log(john);
  // john.age = john.calcAge()
  // console.log(john.calcAge());
  // console.log(john.calcAge(john.birthYear));
  // console.log('alternative method ' + john.calcAge(1990));



//****************************************************************************************
//****************************************************************************************
// *****************CODING CHALLENGE 4 ******************************

// var mark ={
//   fName : 'Mark',
//   lName : 'Spain', 
//   height: 1.5, 
//   mass:60,
//   BMI: function(mass, height){
//    this.bmi = this.mass / (this.height * this.height);
//    return this.bmi;
//   }
// }

// var john ={
//   fName : 'John',
//   lName : 'Smith', 
//   height: 2, 
//   mass:45,
//   BMI: function(mass, height){
//    this.bmi = this.mass / (this.height * this.height);
//    return this.bmi; //this is key to make sure we can do what we did on line 511 with the calling of the methods here:
//   }
// }

// if (john.BMI() > mark.BMI()){
//   console.log('John has the higher BMI ' + john.fName + ' ' + john.lName +  ' of ' + john.bmi);
// } else if(john.BMI() < mark.BMI()){
//   console.log('Mark has the higher BMI ' + mark.fName + ' ' +  mark.lName +  ' of ' + mark.bmi);
// }else {
//   console.log('they are tied for the level of BMI');
// }


//****************************************************************************************
//****************************************************************************************

//Loops and iteration:

// for (var i = 0; i <= 20; i++ ){
//   console.log(i);
// };

// for (var i = 1; i <= 20; i += 2 ){
//   console.log(i);
// };

// var john = [ 'john', 'Smith', 1990, 'designer', false];

  // for (var i = 0; i < john.length; i++){
  //   console.log(john[i]);
  // }

// while loop:
  // var i = 0;
  // while(i < john.length){
  //   console.log(john[i]);
  //   i++;
  // }

// var john = [ 'john', 'Smith', 1990, 'designer', false, 'blue'];

// //this is testing that we can look at just strings and exclude the number
// // **********continue statement *************************
// for (var i = 0; i < john.length; i++){
//   if(typeof john[i] !== 'string') continue;                   // !== means different 
//   console.log(john[i]);
// }

// //only print up until it hits something that isnt a string
// //*****break statement: ********************* */
// for (var i = 0; i < john.length; i++){
//   if(typeof john[i] !== 'string') break;                   // !== means different 
//   console.log(john[i]);
// }

// // ******looping backwards**********
// //remember length is a number so you have to actually go minus 1 to render the array data. It will stop at zero 
// for (var i = john.length -1;  i >=0; i--){
//   console.log(john[i]);
// }


//*******************coding challenge 5! ************************************
//*********************tip calcuations with objects and loops******************* */
// var john = {
//   fullName: 'John Smith', 
//   bills:[124, 48, 264, 180, 42],
//   calcTips: function() {
//     this.tips = [];                               //this is an empty array for now
//     this.finalValues = [];                        //this is an empty array for now
//     for (var i = 0; i < this.bills.length; i++){
//       var percentage;                             // percentage create as a var
//       var bills = this.bills[i];                  //simplify the bills so the if statement doesnt have to have the this aspect all over the loop
//                                                   // - this will come into play on line 592
        
//       if(bills < 50){
//         percentage = .2;
//       } else if(bills >= 50 && bills < 200 ) {
//         percentage = .15;
//       } else {
//         percentage = .10;
//       }
//           //filling tips [] and adding the bills * percentage from the above if else statement:
//         this.tips[i] = bills * percentage;
//           // filling the final values [] by adding the bills value plus the bills times the percentage:
//         this.finalValues[i] = bills + (bills * percentage);
//       }

//   }
// }

// // this is very similar to the john object - diff bills and %
// var mark = {
//   fullName: 'Mark Miller', 
//   bills:[77,475,110,45],
//   calcTips: function() {
//     this.tips = [];                               //this is an empty array for now
//     this.finalValues = [];                        //this is an empty array for now
//     for (var i = 0; i < this.bills.length; i++){
//       var percentage;                             // percentage create as a var
//       var bills = this.bills[i];                  //simplify the bills so the if statement doesnt have to have the this aspect all over the loop
//       // - this will come into play on line 592
      
//       if(bills < 100){
//         percentage = .2;
//       } else if(bills >= 100 && bills < 300 ) {
//         percentage = .10;
//       } else {
//         percentage = .25;
//       }
//       //filling tips [] and adding the bills * percentage from the above if else statement:
//       this.tips[i] = bills * percentage;
//       // filling the final values [] by adding the bills value plus the bills times the percentage:
//       this.finalValues[i] = bills + (bills * percentage);
//     }
    
//   }
// }

//   // now to calculate the average tips
//   //we did this function outside the objects intentionally instead of adding it in like calcTips because it is identical
//   //for both objects so we do it outside to keep the code dry
// function calcAvg(tips){
//   var sum = 0;
//   for( var i = 0; i <tips.length; i++){
//     sum = sum + tips[i];
//   }
//   return sum / tips.length;
// }

// //do the calculations
// john.calcTips();
// mark.calcTips();

// // we are adding in an average property to the object that is the function that calculates the average of johns tips
// john.average = calcAvg(john.tips);
// mark.average = calcAvg(mark.tips);
// console.log(john, mark);

// // now display weither or John or Mark's family pays higher average tips:
// if (john.average > mark.average){
//   console.log('Johns family pays higher tips at ' + john.average);
// }else {
//   console.log('Marks family pays higher tips at ' + mark.average);
// }

//********************************************************************
//****************************************************************** */*/







// *******************************************************SECTION 3**********************************************************************
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================

//lecture : HOISTING


// calculateAge(1990); //you can do this before the function ONLY WORKS FOR FUNCTION DECLARATIONS not Expressions

// function calculateAge(year){
// console.log(2016 - year) ;
// }

// // retirement(1990); wont work here only below after the function expression

// var retirement = function(year) {
//   console.log(65 - (2016 -year));
// }

// //variables

// console.log(age)  //it wont work here because it is defined after it is called (UNDEFINED)
// // global scope
// var age = 23;

// function foo()  {
//   //in the local scope of the foo() function, different age than the global one
//   var age = 65 ;
//   console.log( age) ;
// }
// foo();
// console.log(age);

// *************scoping examples*******************************

// var a = 'hello! ';
// first();

// function first(){
//   var b = 'hi! ';
//   second();
   
//   function second(){
//     var c = 'hey!';
//     console.log(a+b+c); //printing from global, scope 1 and then scope 2. Due to scoping chain.
//   }
// }

// //we have in this example the third function attempting to call abcd this doesnt work ...
// var a = 'hello! ';
// first();

// function first(){
//   var b = 'hi! ';
//   second();
   
//   function second(){
//     var c = 'hey!';
//     third(); //can call this because of the scope chain, the reason it is undefined is that the var inside the second function is not accessable by the third function
//   }
// }

// function third(){
//   var d = 'john ';
//   // console.log(c);
//   console.log(a+d); //this works because the third function has access these variables due to scope
// }



//********************************************************************************************************** */
//*************************************THIS key word****************************************************** */
//********************************************************************************************************** */
//********************************************************************************************************** */

//in a regular function call: the 'this' keyword points at the global object, (the window object, in the browser)

//method call: the 'this' var points to teh object that is calling the method.

//the 'this' keyword is not assigned a value until a function where it is defined is actually called. 



// console.log(this);  //window object

// calcAge(1990);  
// //this is also the window object because the object this function is attached to is the global object (reminder this is not a method this is a reg function call)
// function calcAge(year){
//   console.log(2016 - year);
//   console.log(this);
// }

// var john = {
//     name: 'John', 
//     yrOB: 1990,
//     // function expression thus it is different, not a function declaration as in calcAge(1990) above
//     calcAge: function() {
//       console.log(this);
//       console.log(2016 - this.yrOB);

//       // function innerFunction(){
//       //   console.log(this);        //'this' is now backed out and is part of the global window - it is a reg function 
//       // }
//       // innerFunction();
//     }
// }

// john.calcAge();

// var mike = {
//   name: 'Mike',
//   yrOB: 1984,
// };

// mike.calcAge = john.calcAge; //this is a variable that says mikes calcage is the same as johns calcage function
// mike.calcAge();

//reminder - this is only called when the method is called thus above it transitions from john to mike's object when the calcAge was called

//************************************************************************************************************************************** */
//************************************************************************************************************************************** */
//************************************************************************************************************************************** */

//*******************************************************SECTION 4*********************************************************************** */
//***********************************************DOM manipulation (doc object model)************************************************************** */


