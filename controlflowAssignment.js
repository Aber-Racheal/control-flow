//Write a program that takes in an array of numbers and consoles the first four 
//items multiplied by itself  and the last two added by 10. Return the array with 
//the new values


function array(arr) {
    for (let i = 0; i < 4; i++) {
        arr[i] = arr[i];
    }

    arr[arr.length - 2] += 10;
    arr[arr.length - 1] += 10;

    return arr;
}

let numbers = [4,6,7,8,9,1,0,4,5];
console.log(array(numbers));


//Write a program that takes in the following array and 
//use a while loop to iterate and break when 
//the item is equal to the fourth index :
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log(arrNum[i]);
    i++;
}

//Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let stringsArray = ["aber","racheal","esther","loice"];
arrayElements(stringsArray);


//Write a JavaScript function that takes a string as input and reverses it using a while loop. 
//The function should return the reversed string.
function reverseString(str) {
    let reversedString = '';
    let i = str.length - 1;
    while (i >= 0) {
        reversedString += str[i];
        i--;
    }
    return reversedString;
}


let inputString = "Racheal";
console.log(reverseString(inputString)); 


//Write a function that takes in a an array of strings and use a continue statement when the 
//item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function newArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 1) {
            continue;
        }
        console.log(arr[i]);
    }
}

let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
newArray(fruits);











