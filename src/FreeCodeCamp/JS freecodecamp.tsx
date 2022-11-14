// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength =lastName.length;
//поиск строки



// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";


firstLetterOfLastName = lastName[0]; // Change this line
//значние 1 буквы(квадратные скобки)



// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1];
//поиск последней буквы


const myArray = ["hello", 90];
//массив

const myArray = [["Hello", 10], ["WORLD", 11]];
//вложеннй массив


const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
//присвоение значения элеенту массива


const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])
//добавление в конец массива

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//вделение последнего элемента массива и присвоение к новой переменной


const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
//выделение первого элемента ассива и присвоение к другой переменной




// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//изменение первого подмассива



function functionName() {
    console.log("Hello World");
}
//повторяющаяся часть (function)


function functionWithArgs(one, two) {

    console.log(one+two);
}
functionWithArgs(7, 3);
//функции со значением и вызовом


function timesFive(num){
    return num*5;
}
const answer = timesFive();
//возврат значение функции


// глобальная область видиости
let myGlobal = 10;

function fun1() {
    // локальная область видимости
    oopsGlobal=5;
}










