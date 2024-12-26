let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    
    let area = length * width;
     document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let groceryTracker = () => document.getElementById('resultGrocery').innerHTML="The total amount is: $ "+parseFloat(document.getElementById('grocery1').value)+parseFloat(document.getElementById('grocery2').value)+parseFloat(document.getElementById('grocery3').value);