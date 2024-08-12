const number1 = document.getElementById("num1") as HTMLInputElement
const btn1 = document.getElementById("btnPrint") as HTMLButtonElement
const printValue = document.getElementById("entredNumber") as HTMLOutputElement

function printEntredValue():void{
    const  num1 = parseFloat(number1.value)
    printValue.textContent = num1.toString();

}
btn1.addEventListener("click",printEntredValue)
