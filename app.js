// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit 
// in the console. 

// const fruits = ["mango" , "banana" , "orange" , "Kiwi" , "watermelon" , "grapes"]
// for(let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i],i);
    
// }

// q no 1     ok


// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to 
// a paragraph with the ID output using document.querySelector.


let colors = ["red" , "green" , "blue" , "yellow"];
const paragraph =document.querySelector("#input");
for(let i = 0; i < colors.length; i++){
    paragraph.innerHTML += colors[i] + ". ";
} 