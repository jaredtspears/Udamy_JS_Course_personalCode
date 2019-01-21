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
