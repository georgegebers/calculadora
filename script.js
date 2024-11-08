const display = document.getElementById('display'); 
function appendToDisplay(value) {
  display.value += value;
} 

function clearDisplay() {
  display.value = '';
} 

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
} // calcular a expressão no display

function sqrt() {
  if (display.value) {
    display.value = Math.sqrt(parseFloat(display.value));
  }
} // calcular a raiz quadrada do valor no display

function sin() {
  if (display.value) {
    display.value = Math.sin(parseFloat(display.value));
  }
} // calcular o seno do valor no display

function cos() {
  if (display.value) {
    display.value = Math.cos(parseFloat(display.value));
  }
} // calcular o cosseno

// converter entre Celsius e Fahrenheit
function convertTemperature() {
  if (display.value) {
    let temp = parseFloat(display.value);
    // Verifica se é Celsius ou Fahrenheit
    if (temp <= 100) {
      // celsius para fahrenheit
      display.value = ((temp * 9) / 5 + 32).toFixed(2);
    } else {
      // fahrenheit para celsius
      display.value = ((temp - 32) * 5 / 9).toFixed(2);
    }
  }
}
