const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// 检查元素是否正确选择
if (!display) {
  console.error('No element with class "display" found');
}

if (buttons.length === 0) {
  console.error('No elements with class "button" found');
}

buttons.forEach(button => {
  // Define function to calculate based on button clicked
  const calculator = (btnValue) => {
    console.log('Button clicked:', btnValue); // 调试语句
    if (btnValue === "=" && output !== "") {
      // Replace '%' with '/100' before evaluating
      output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
      output = "";
    } else if (btnValue === "DEL") {
      output = output.toString().slice(0, -1);
    } else {
      // If output is empty and button is in specialChars, return
      if (output === "" && specialChars.includes(btnValue)) return;
      output += btnValue;
    }
    display.value = output;
  };

  // Get the clicked button's data-value
  button.addEventListener('click', (e) => calculator(e.target.dataset.value));
});
