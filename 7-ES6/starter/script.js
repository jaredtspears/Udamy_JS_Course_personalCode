//es6 

// function driversLicence (passTest){
//   var firstName = 'john';
//   var DOB= 1990;
//   console.log(firstName + ' ' + DOB + ' can actually drive a car!');
// }
// driversLicence(true);

// //es6 
// function driversLicence (passTest){
 
//   console.log(firstName); //not defined because of temporal dead zone from being Hoisted. we have to declare and define first to use it;
//   let firstName;
//   const DOB = 1990;
//  //these vars are inside the if block and it is not able to be accessed outside of it 
//   if (passTest){
// //  let firstName = 'john';
// //  const DOB= 1990;
//   firstName = 'john';
//   DOB;
//  }
//   console.log(firstName + ' ' + DOB + ' can actually drive a car!');
// }
// driversLicence(true);


// let i = 23;
// for (let i = 0; i < 5; i++){
//   console.log(i);
// }
// console.log(i);
//this will log the inner i first: 12345, then i from the outer scope will be logged: 23


//=================================================================
//* Blocks and IIFEs

//blocks are not restricted to loops if IIFEs
//*ES6: notice this looks like an IIFE it is private!
// {
//   const a = 1;
//   let b = 2;
//   var c = 3; //this is not function scoped so it if logged it will be 3
// }
// console.log(a+b);
// console.log(c);

//=========================================================================

//*STRINGS in ES6:

// let firstName = 'Joe';
// let lastName = 'Peters';
// const yearOfBirth = 1990;

// function calcAge(year){
//   return 2019 - year;
// }

// //template literals!
// console.log(`This is ${firstName} ${lastName} he is ${calcAge(yearOfBirth)} old!`);

//new ES6 methods:
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J')); //looks to see what it starts with
// console.log(n.endsWith('sm'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));

//* Arrow Functions:

// const yrs = [1990, 1965, 1982, 1936];

//es5
// var ages5= yrs.map(function(el){
//   return 2019 - el;
// });
// console.log(ages5); 

//es6
// let ages6 = yrs.map(el =>2019-el);
// console.log(ages6);


// ages6 = yrs.map((el, index) => `Age element ${index + 1 }: ${2019 - el}. `);
// console.log(ages6);  //will log: ["Age element 1: 29. ", "Age element 2: 54. ", "Age element 3: 37. ", "Age element 4: 83. "]


//more than one line of code: will return ["Age element 1: 29. ", "Age element 2: 54. ", "Age element 3: 37. ", "Age element 4: 83. "]
// ages6 = yrs.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1 }: ${age}. `
// });
// console.log(ages6);

//*no THIS key word they have a lexical key word in ARROW FUNCTIONS:

//es5 version:
// var box5 = {
//   color: 'green', 
//   position: 1, 
//   clickMe: function(){
//     var self = this; //this is a hack to gain access to box5' this
//     document.querySelector('.green').addEventListener('click', function(){
//       var string = 'This is box number ' + self.position + self.color;  //this points to the global window... this call back function is a reg function call so it doesnt point to box5
//       alert(string);
//     })
//   }
// }
// box5.clickMe();

//es6 to avoid the above 'hack'

const box6= {
  color: 'green', 
  position: 1, 
  clickMe: function(){
    document.querySelector('.green').addEventListener('click', () =>{
      let string = `This is box number ${this.position}  ${this.color}` ;  
      alert(string);
    })
  }
}
box6.clickMe();


//another way in es6
// const box62= {
//   color: 'green', 
//   position: 1, 
//   clickMe: () => { //this method now shares the lecal key word of it's surroundings.which is the global context. only the callback function within can have the ability to use the box62 this.
//     document.querySelector('.green').addEventListener('click', () =>{
//       let string = `This is box number ${this.position}  ${this.color}` ;  
//       alert(string);
//     })
//   }
// }
// box62.clickMe();


//another example in es6:Constructure
// function Person(name) { 
//   this.name = name;
// }

// Person.prototype.myFriends5 = function(friends){
  
//   var arr = friends.map(function(el)
//   {
//     return self.name + ' ' + el;
//   }.bind(this));
//   console.log(arr);
// }
// var friends = ['bob', 'jane', 'mark'];
// new
// Person('john').myFriends5(friends);

//*es6 way cleaner
// function Person(name) { 
//   this.name = name;
// }

// Person.prototype.myFriends5 = function(friends){

//   const arr = friends.map((el) => `${this.name} is friends with ${el}`);

//   console.log(arr);
// }
// const friends = ['bob', 'jane', 'mark'];

// new
// Person('john').myFriends5(friends);


//*Destructuring lecture:

//es5 
// var john = ['john', 25];
// var name = john [0];
// var age = john [1];


// es6

// const [name, age] = ['johnny', 30] ;

// console.log(name);
// console.log(age);

// const obj = {
//   fName: 'Joe', 
//   lName: 'Smith'
// };

// const {fName, lName} = obj;
// console.log(fName);
// console.log(lName);

// const {fName: a, lName:b} = obj;
// console.log(a);
// console.log(b);

//this makes sense when we want to return some thing instead of return { ... } we can use destructuring to assist us:
// function calcAgeRetirment(yr){
//   const age = new Date().getFullYear() - yr;
//   return [age, 65 - age];
// }

// const[age, retirement] = calcAgeRetirment(1990);

// console.log(age);
// console.log(retirement);