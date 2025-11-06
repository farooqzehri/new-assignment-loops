// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit 
// in the console. 

// const fruits = ["mango" , "banana" , "orange" , "Kiwi" , "watermelon" , "grapes"]
// for(let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i],i);
    
// }

// q no 1     ok


// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to 
// a paragraph with the ID output using document.querySelector.


// let colors = ["red" , "green" , "blue" , "yellow"];
// const paragraph =document.querySelector("#input");
// for(let i = 0; i < colors.length; i++){
//     paragraph.innerHTML += colors[i] + ". ";
// } 

// q no 2     ok



// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
 

// for(let i = 0 ; i <= 10 ; i++){
//     console.log(i);
    
// }

// q no 3   ok 


// 4. Use a while loop to print numbers from 5 to 1 in the console. 
// let i = 5
// while(i >= 1 ){
// console.log(i);
// i--

// }
// q no 4 ok

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div 
// with ID names to show all names separated by commas. 
// const output = document.querySelector("#output")
// const names = ["ali" , "sara" , "majeed" ,"Sharokh"];
// for(let i = 0; i < names.length; i++){
//     output.innerHTML += names[i] +", "


// }

//    q no 5 ok


// 6. Change the text of a paragraph with ID status to "Loading..." using 
// document.querySelector. 
// const statuss =document.querySelector("#load");
// statuss.innerHTML = "Loading...."


// q no 6 ok



// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in 
// a paragraph with ID sum. 


// let numbers = [12, 21, 32];
// let total = 0;
// for(let i = 0 ; i < numbers.length ; i++){
//     total += numbers[i]
// }
 
// const summary =document.querySelector("#sum");
// summary.innerHTML = "total is : " + total


// q no 7 ok


// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a 
// single string in a div with ID cities.

// let city = ["quetta" , "karachi" , "Khuzdar" ,"dubai"];
// let cstr = "";
// for(let i = 0 ; i < city.length; i++){
//   cstr += city[i]
//   if (i < city.length - 1 ){
//     cstr += ", ";
//   }
// }
// let cities = document.querySelector("#result")
// cities.innerHTML = cstr

// q no 8 ok

// rite a loop that counts from 1 to 20 and logs only the even numbers in the console.


// for(let i = 0 ; i <= 20; i++){
//     if(i % 2 === 0)
//         console.log(i);
        
// }

// q no 9 ok


// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the 
// largest number in a paragraph with ID max.

// const numbers = [45, 22, 89, 100]
// let maxn = [0];
// for(let i = 0; i <= numbers.length; i++){
//     if(numbers[i] > maxn){
//         maxn = numbers[i];
//     }

// }
// let max = document.querySelector("#max");
// max.innerHTML = "largest number is = " + maxn

// q  no 10 ok




// 11. Use document.querySelector to select a div with ID result and change its text to "Task 
// Complete". 

// const result =document.querySelector("#results")
// result.innerHTML = "Task Complete."

// q no 11 complete ok



//12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and 
//display it inside an element with ID averageTemp. 

let temperatures = [30, 35, 32, 40];
let sum = 0
for(let i = 0; i < temperatures.length; i++){
    sum += temperatures[i] 

}
let average = sum / temperatures.length;

const TemprAvarage =document.querySelector("#averageTemp")
TemprAvarage.innerHTML = "Average Temprature is : " + average

// Question no 12 OK

