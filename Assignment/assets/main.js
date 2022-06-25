// *** Write your code here***
let display = document.getElementById("displayResult")
const appendNumber = (number) => {
    display.value+=number
}

const compute = () => {
    display.value = eval(display.value) 
}

//to clear the number on the display
const clear = () => {
    display.value = "0";
}

//to delete a single number or operation
const deleteNo = () => {
    display.value = display.value.slice(0,-1)
}



