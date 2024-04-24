function getNumber(num){
    var display = document.getElementById("display");
   display.value += num;
}

function clearResult(){
    var display = document.getElementById("display");
    display.value = ""
}

function onebyone(){
    var display =document.getElementById("display");
    display.value = display.value.slice(0, display.value.length -1);
}

function getSqure(){
    var display = document.getElementById("display")
    var curentValue = display.value
    var squreValue = curentValue * curentValue
    display.value = squreValue
}

function getResult(){

    var display = document.getElementById("display");
    var num = display.value;
    var result;

    var num$ = num.split(/[+\-*/]/);
    var operator = num.match(/[+\-*/]/);

    if (operator && num$.length === 2) {
        var num1 = parseFloat(num$[0]);
        var num2 = parseFloat(num$[1]);

        if (operator[0] === '+') {
            result = num1 + num2;
        } else if (operator[0] === '-') {
            result = num1 - num2;
        } else if (operator[0] === '*') {
            result = num1 * num2;
        } else if (operator[0] === '/') {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
        } else {
            result = 'Error: Invalid operator';
        }
    } else {
        result = 'Error: Invalid ';
    }

    display.value = result;
}



