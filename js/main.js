function compareTwoNumbers() {
let compareOne = document.getElementById("firstNumber").value;
let compareTwo = document.getElementById("secondNumber").value;
let compareAnsver = document.getElementById("ansver");
if (compareOne != "" && compareTwo != "") {
    if (Number(compareOne) < Number(compareTwo)) {
        cleanCompare()
        compareAnsver.insertAdjacentHTML('beforeend', `<p>-1</p>`);
    } else if (Number(compareOne) > Number(compareTwo)) {
        cleanCompare()
        compareAnsver.insertAdjacentHTML('beforeend', `<p>1</p>`);
    } else {
        cleanCompare()
        compareAnsver.insertAdjacentHTML('beforeend', `<p>0</p>`);
    }
} else {
    cleanCompare()
    compareAnsver.insertAdjacentHTML('beforeend', `<p>поля не должны быть пустые</p>`);
}
}

function factorialOnoNumber() {
    let factorialNumber = document.getElementById("factorialNumber").value;
    let factorialAnsver = document.getElementById("ansverFactorial");
    let result = 1;
    if (factorialNumber != "" && factorialNumber > 0) {
        for (i = 1; i <= factorialNumber; i++) {
            result = result * i;
        }
        cleanFactorial()
        factorialAnsver.insertAdjacentHTML('beforeend', `<p>${result}</p>`);
    } else {
        cleanFactorial()
        factorialAnsver.insertAdjacentHTML('beforeend', `<p>введи плис число больше 0</p>`);
    }
}

function stringSumm() {
    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    let stringAnsver = document.getElementById("ansverString");
    if (one != "" && one > 0 && two != "" && two > 0 && three != "" && three > 0) {
    let stringSum= one + two + three;
    cleanFactorial()
    stringAnsver.insertAdjacentHTML('beforeend', `<p>${Number(stringSum)} ${typeof(Number(stringSum))}</p>`);
} else {
    cleanFactorial()
    stringAnsver.insertAdjacentHTML('beforeend', `<p>введи плис число больше 0</p>`);
}
}
function considerTheArea() {
    let lengthArea = document.getElementById("length").value;
    let widthArea = document.getElementById("width").value;
    let areaAnsver = document.getElementById("areaAnsver");
    let allArea = 0;
    if (lengthArea == "") {
        lengthArea = widthArea;
    }
    if (widthArea == "") {
        widthArea = lengthArea;
    }
    if (lengthArea > 0 && widthArea > 0) {
        allArea = Number(widthArea) * Number(lengthArea);
        cleanArea()
        areaAnsver.insertAdjacentHTML('beforeend', `<p>${allArea}</p>`);
    } else {
        cleanArea()
        areaAnsver.insertAdjacentHTML('beforeend', `<p>введи плис число больше 0</p>`);
    }
}

function checkForPerfect() {
    let NumberPerfect = document.getElementById("perfoctNumber").value;
    let perfectAnsver = document.getElementById("perfectAnsver");
    let numberPer = Number(NumberPerfect);
    let s = 0;
    for (let i = 1; i < numberPer - 1; i++)
        {
            if (numberPer % i == 0)
            {
                s += i;
            }
        }
        if (s == numberPer) {
            cleanPerfect()
             perfectAnsver.insertAdjacentHTML('beforeend', `<p>Число: ${NumberPerfect} является совершенным</p>`);
        } else {
            cleanPerfect()
            perfectAnsver.insertAdjacentHTML('beforeend', `<p>Число: ${NumberPerfect} НЕ является совершенным</p>`);
        }
 } 

 function checkAllPerfect() {
     let startNumber = document.getElementById("minNumber").value;
     let endNumber = document.getElementById("maxNumber").value;
     let startNumberNum = Number(startNumber);
     let endNumberNum = Number(endNumber);
     let allAnsver = document.getElementById("allPerfectAnsver");
     let s = 0;
     if (startNumber != "" && startNumber > 0 && endNumber != "" && endNumber > 0) {
        if (startNumberNum > endNumberNum) {
            cleanAllPerfect()
        allAnsver.insertAdjacentHTML('beforeend', `<p>ну дядь леваю циферка меньше правой должна быть ну смотри немного</p>`);
        }
        cleanAllPerfect()
        for (startNumberNum; startNumberNum <= endNumberNum; startNumberNum++) { 
            s=0;   
            for (let i = 1; i < startNumberNum - 1; i++)
        {
            if (startNumberNum % i == 0)
            {
                s += i;
            }
        }
        if (s == startNumberNum) {
            
        allAnsver.insertAdjacentHTML('beforeend', `<p>${startNumberNum} совершенное число</p>`);
        } 
 }
       
     } else {
        cleanAllPerfect()
        allAnsver.insertAdjacentHTML('beforeend', `<p>введи плис числа больше 0</p>`);
     }
 } 




function cleanCompare() {
    let compareClean = document.getElementById("ansver");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}
function cleanFactorial() {
    let ansver = document.getElementById("ansverFactorial");
    while (ansver.firstChild) {
        ansver.removeChild(ansver.firstChild);
    }
}
function cleanFactorial() {
    let ansver = document.getElementById("ansverString");
    while (ansver.firstChild) {
        ansver.removeChild(ansver.firstChild);
    }
}
function cleanArea() {
    let ansver = document.getElementById("areaAnsver");
    while (ansver.firstChild) {
        ansver.removeChild(ansver.firstChild);
    }
}
function cleanPerfect() {
    let ansver = document.getElementById("perfectAnsver");
    while (ansver.firstChild) {
        ansver.removeChild(ansver.firstChild);
    }
}
function cleanAllPerfect() {
    let ansver = document.getElementById("allPerfectAnsver");
    while (ansver.firstChild) {
        ansver.removeChild(ansver.firstChild);
    }
}