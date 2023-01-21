// console.log("Hello Mystro")
// console.log(4+10)

// //-------

// //Variables

// let name = ' Sara';
// let age = 22;
// let names = ' sara , salma ', ages=20;
// let salary =1000;

// if(age>20){
// console.log('Enter')
// }

// console.log(name , age, salary);

// // constant defined
// const COLOR_RED='#fefefe';

// let agess=10;

// //code see agess=10
// agess=100
// //code see agess = 100
// agess=80
// //code see agess =80

// // when we name any variable we must make it readable
// //java script use camel case in writing var 
// // coding : conventions متعارف عليه 

// // let age = 10 integer 
// // let age='10' string

// // let f = back tex i could a var in side a sentence
// // single qout == double qout


// //boolean
//  let married = false;
//  let graduated =true;
//  console.log(married)

//  let value= 6>5;
//  console.log(value)


//  //object  {}

//  //interaction
//  let myage = prompt('How old are you?')
//  console.log(myage)

//  //confirm
//  let marry=confirm('Are you married?')
//  console.log(marry)


//  //typeof to find type of value if it string or integer 
//  alert ('my name is sara')



//conditions
//  let studentAge=prompt('Enter Your Age:')

//  if(age>20){
//    console.log('okay') 
//  }else{
//     console.log('Issue')
//  }

// let username='sara'
// let password=12345
// let user_input=prompt('Enter Username:')
// let password_input=prompt('Enter Password:')
// if(user_input==username && password_input==password){
//     console.log('login succeded')
// }else{
// console.log('Login Failed')
// }
// let grade=prompt('Enter Your grade:')
// if(grade>90){
//     console.log('A+')
// }else if(grade>80){
//     console.log('B+')
// }else if(grade>70){
//     console.log('C+')
// }
// let allowAccess;
// let age =prompt("Enter Your Age")

// if(age>20){
//     allowAccess=true
// }else{
//     allowAccess=false
// }
// console.log(allowAccess)

//ternary operators
// let age =prompt("Enter Your Age")
// let allowAccess=(age>20)?true: false;
// console.log(allowAccess)   

// let company = prompt ('Enter Your Company :')
// if (company=='google') {
//     alert('good')
// } else {
//     alert('bad')
// }
// let company = prompt ('Enter Your Company :');
// (company == 'google')? alert('good') : alert('bad')
//////loop
// let i =1;
// while(i<100){
//     console.log(i)
//      i=i+2
// }




// let n = 1;
// while (n <= 6) {
//     let i = 1;
//     while (i <= 12) {
//         let res=n*i;
//         console.log(`${n} X ${i}= ${res}`)
//         i = i + 1
//     }
//     n = n + 1
//     console.log('---------------------')

// }

// let n = prompt("Enter Number");
// let i = 1;
// while (i <= 12) {
//     let res=n*i;
//     console.log(`${n} X ${i}= ${res}`)
//     i = i + 1
// }
let n = Number(prompt("Enter Number")) ;
let e= Number(prompt("Enter End")) ;
while (n <= e) {
    let i = 1;
    while (i <= 12) {
        let res=n*i;
        console.log(`${n} X ${i}= ${res}`)
        i = i + 1
    }
    n = n + 1
    console.log('---------------------')

}

   
