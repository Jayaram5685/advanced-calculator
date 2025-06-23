const display = document.getElementById("display");
let memory = 0;
let resetNext = false;

function appendToDisplay(input) {
  if (resetNext) {
    display.value = "";
    resetNext = false;
  }
  const lastChar = display.value.slice(-1);
  if (/[+\-*/.]/.test(input) && /[+\-*/.]/.test(lastChar)) return;
  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
    resetNext = true;
  } catch {
    display.value = "Error";
    resetNext = true;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("calculator").classList.toggle("dark-mode");
}

function memoryAdd() {
  memory = Number(display.value);
}

function memoryRecall() {
  display.value += memory;
  display.scrollLeft = display.scrollWidth;
}

function memoryClear() {
  memory = 0;
}

document.addEventListener("keydown", function (event) {
  if (event.key.match(/[0-9+\-*/.]/)) {
    appendToDisplay(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("calculator").classList.toggle("dark-mode");
}
