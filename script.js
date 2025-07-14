function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// Optional: Keyboard support
document.addEventListener('keydown', function (event) {
  const allowedKeys = "0123456789/*-+.";
  if (allowedKeys.includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
