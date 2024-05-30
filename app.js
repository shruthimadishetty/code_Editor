function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
//run code 
let html_code = document.getElementById("html-code");
let css_code = document.getElementById("css-code");
let js_code = document.getElementById("js-code");
let output_code = document.getElementById("output");

function run_code() {
  output_code.contentDocument.body.innerHTML =
    html_code.value  + "<style>" + css_code.value + "</style>";
  output_code.contentWindow.eval(js_code.value);
}

// dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
//console
function runConsole(){
  console.log("hello")
  const consoleOutput = document.getElementById('console-output');
    consoleOutput.contentWindow.innerHTML = ''; // Clear previous console output
    
    // Custom console.log to capture output
    const customConsole = {
        log: function(message) {
            consoleOutput.contentWindow.innerHTML += message + '\n';
        }
    };
}

