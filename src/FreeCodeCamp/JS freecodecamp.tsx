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


function myLocalScope() {
    // Only change code below this line

    console.log('inside myLocalScope', myVar);
    const myVar = "aaa"
}
myLocalScope();
myTest();
console.log('inside myLocalScope', myVar);
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//переменные объявленные внутри функции отображаются только при помощи mytest



// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();

//локальная переменная имеет приоритет над глобальной (оинаковые иена)



// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
// "add" оператор не возвращающий значение (без return)


// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//присвоение возврощаемого значения




function nextInLine(arr, item) {
    var queue = arr.push(item);
    //PUSH добавляет элемент в конец массива

    var removeItem = arr.shift();
    //shift удаляет первый элемент массива
    return removeItem;



    function welcomeToBooleans() {
        return true; // Change this line
        //логические операции тру и фолс взаимнозаменяющиесф


        function trueOrFalse(wasThatTrue) {

            if (wasThatTrue){
                return "Yes, that was true";
            }
            {return "No, that was false";
            }}
        trueOrFalse;
        //оператор условия IF}

        function equalityTest(myVal) {
            if (myVal == 10) {
                return "Equal";
            }
            return "Not Equal";
        }
        //ОПЕРАТОР РАВЕНСТВА ==

        function testStrict(val) {
            if (val === 7) { // СТРОГОЕ РАВЕНСТВО
                return "Equal";
            }return "Not Equal";
        }testStrict(10);

        typeof//определение типа переменной

            function testNotEqual(val) {
                if (val!=99) {
                    return "Not Equal";
                }
                return "Equal";}
        //оператор НЕРАВЕНСТВА

        function testStrictNotEqual(val) {
            if (val!==17) { // Change this line
                return "Not Equal";
            }
            return "Equal";
        }
        //строгое неравенство
        3 !==  3  // false
        3 !== '3' // true
        4 !==  3  // true

        function testGreaterThan(val) {
            if (val>100) {  // Change this line
                return "Over 100";
            }
            if (val>10) {  // Change this line
                return "Over 10";
            }
            return "10 or Under";
        }
        testGreaterThan(10);
//оператор сравнения (строго больше)

        function testGreaterOrEqual(val) {
            if (val>=20) {  // Change this line
                return "20 or Over";
            }
            if (val>=10) {  // Change this line
                return "10 or Over";
            }
            return "Less than 10";
        }
        testGreaterOrEqual(10);
//оператор сравнения (больше либо равно)

        if (num > 5) {
            if (num < 10) {
                return "Yes";
            }
        }
        //логически оператор возващает зачение
        //только когда оба операнта TRUE
        return "No";
        if (num > 5 && num < 10) {
            return "Yes";
        }
        return "No";

        function testLogicalOr(val) {
            if (val > 20 || val < 10) {
                return "Outside";
            }
            return "Inside";
        }
        testLogicalOr(15);
//логический оператор || выполняется при 1 true операнде

        if (num > 10) {
            return "Bigger than 10";
        } else {
            return "10 or Less";
        }
        //оператор else для альтернативного решения кода


        if (num > 15) {
            return "Bigger than 15";
        } else if (num < 5) {
            return "Smaller than 5";
        } else {
            return "Between 5 and 15";
        }
        //оператор else if для выполения  нескольких условий

        unction testSize(num) {
            // Only change code below this line
            if (num<5){
                return "Tiny";
            } else if (num<10){
                return "Small";
            } else if (num<15){
                return "Medium";
            } else if (num<20){
                return "Large";
            }else if (num>=20){
                return"Huge";
            }else{
                return "Change Me";}
        }
        testSize(7);
        // else if используется для сложных связок











