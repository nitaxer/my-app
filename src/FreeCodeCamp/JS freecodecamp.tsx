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

        const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

        function golfScore(par, strokes) {
            // Only change code below this line
            if (strokes < 2) {
                return "Hole-in-one!";
            } else if (par == par && strokes <= par-2) {
                return "Eagle";
            } else if (par == par && strokes <= par-1) {
                return "Birdie";
            } else if (par == par && strokes === par) {
                return "Par";
            } else if (par == par && strokes === par+1) {
                return "Bogey";
            } else if (par == par && strokes === par+2) {
                return "Double Bogey";
            } else if (par == par && strokes >= par+3) {
                return "Go Home!";
            }
            return "Change Me";

            // Only change code above this line
        }

        golfScore(5, 4);
        //задача про гольф, нужно еще раз просмотреть


        function caseInSwitch(val) {
            let answer = "";
            // Only change code below this line
            switch (val){
                case 1:
                    answer="alpha";
                    break;
                case 2:
                    answer="beta";
                    break;
                case 3:
                    answer="gamma";
                    break;
                case 4:
                    answer="delta";
                    break;
            }

            return answer;
        }
        caseInSwitch(1);

//выбор из ножества вариантов с оператором switch
//case
//breake
        switch (lowercaseLetter) {
            case "a":
                console.log("A");
                break;
            case "b":
                console.log("B");
                break;
        }


        switch (num) {
            case value1:
                statement1;
                break;
            case value2:
                statement2;
                break;
            ...
            default:
                defaultStatement;
                break;
        }

        function switchOfStuff(val) {
            let answer = "";
            // Only change code below this line
            switch (val){
                case "a":
                    answer = "apple";
                    break;
                case "b":
                    answer = "bird";
                    break;
                case "c":
                    answer = "cat";
                    break;
                default:
                    answer = "stuff";
            }
            // Only change code above this line
            return answer;
        }

        function switchOfStuff(val) {
            let answer = "";
            // Only change code below this line
            switch (val){
                case "a":
                    answer = "apple";
                    break;
                case "b":
                    answer = "bird";
                    break;
                case "c":
                    answer = "cat";
                    break;
                default:
                    answer = "stuff";
            }
            // Only change code above this line
            return answer;
        }

        function switchOfStuff(val) {
            let answer = "";
            // Only change code below this line
            switch (val){
                case "a":
                    answer = "apple";
                    break;
                case "b":
                    answer = "bird";
                    break;
                case "c":
                    answer = "cat";
                    break;
                default:
                    answer = "stuff";
            }
            // Only change code above this line
            return answer;
        }

        function switchOfStuff(val) {
            let answer = "";
            // Only change code below this line
            switch (val){
                case "a":
                    answer = "apple";
                    break;
                case "b":
                    answer = "bird";
                    break;
                case "c":
                    answer = "cat";
                    break;
                default:
                    answer = "stuff";
            }
            // Only change code above this line
            return answer;
        }

        switchOfStuff(1);
        //инструкция switch\case//K

        let answer = "";
        // Only change code below this line
        switch (val){
            case 1:
            case 2:
            case 3:
                answer ="Low";
                break;
            case 4:
            case 5:
            case 6:
                answer ="Mid";
                break;
            case 7:
            case 8:
            case 9:
                answer = "High";
                break;
        }

        // Only change code above this line
        return answer;
    }

    sequentialSizes(1);
    //оператор switch case с несколькии кейсами
    function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line
        switch (val){
            case "bob":
                answer="Marley";
                break;
            case 42:
                answer="The Answer";
                break;
            case 1:
                answer = "There is no #1";
                break;
            case 99:
                answer = "Missed me by this much!";
                break;
            case 7:
                answer = "Ate Nine";
                break;

        }


        // Only change code above this line
        return answer;
    }

    chainToSwitch(7);
    //замена множественных операторов if.else на switch

    function isEqual(a, b) {
        return a === b;
    }

//замена if/else

    function myFun() {
        console.log("Hello");
        return "World";
        console.log("byebye")
    }
    myFun();

    function abTest(a, b) {
        // Only change code below this line
        if(a < 0 || b < 0){
            return undefined;
        }

        // Only change code above this line

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }

    abTest(2,2);
    //возвращать ранний шаблон бля функции

    let count = 0;

    function cc(card) {
        // Only change code below this line
        if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
            //alert("2 3 4 5 6");
            count += 1;
        }
        else if (card == 7 || card == 8 || card == 9) {
            count += 0;
        }
        else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
            count -= 1;
        }
        if (count <= 0) {
            return String(count) + " Hold";
        }
        else {
            return String(count) + " Bet";
        }

        return "Change Me";
        // Only change code above this line
    }

    cc(2); cc(3); cc(7); cc('K'); cc('A');
    //задача с картами






