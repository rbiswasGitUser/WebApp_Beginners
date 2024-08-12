var number1 = document.getElementById("num1");
var btn1 = document.getElementById("btnPrint");
var printValue = document.getElementById("entredNumber");
function printEntredValue() {
    var num1 = parseFloat(number1.value);
    printValue.textContent = num1.toString();
}
btn1.addEventListener("click", printEntredValue);
