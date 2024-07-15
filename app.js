function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function switchModal(currentModalId, targetModalId) {
  closeModal(currentModalId);
  showModal(targetModalId);
}
// Close the modal if the user clicks outside of it
// window.onclick = function (event) {
//   if (event.target.classList.contains("modal")) {
//     event.target.style.display = "none";
//   }
// };

window.onclick = function (event) {
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  if (event.target == loginModal) {
    closeModal("login-modal");
  } else if (event.target == signupModal) {
    closeModal("signup-modal");
  }
};

//run code
let html_code = document.getElementById("html-code");
let css_code = document.getElementById("css-code");
let js_code = document.getElementById("js-code");
let output_code = document.getElementById("output");

function run_code() {
  output_code.contentDocument.body.innerHTML =
    html_code.value + "<style>" + css_code.value + "</style>";
  output_code.contentWindow.eval(js_code.value);
}

// dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
//console
function runConsole() {
  const editor = document.getElementById("js-code");
  const consoleOutput = document.getElementById("console");
  const code = editor.value;

  consoleOutput.innerHTML = "";
  const logs = [];
  const result = console.log;
  console.log = function (...args) {
    logs.push(args.join(" "));
  };

  try {
    new Function(code)();
    logs.forEach((message) => {
      consoleOutput.innerHTML += `<pre>${message}</pre>`;
    });
  } catch (error) {
    consoleOutput.innerHTML += `<pre style="color: red;">${error}</pre>`;
  } finally {
    console.log = result;
  }
}

// Show tab content
function showTab(tab) {
  const tabs = document.querySelectorAll(".tab_content");
  const tabButtons = document.querySelectorAll(".tab_button");

  tabs.forEach((tabContent) => {
    tabContent.style.display = "none";
  });

  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tab).style.display = "block";
  document
    .querySelector(`.tab_button[onclick="showTab('${tab}')"]`)
    .classList.add("active");

  if (tab === "console-tab") {
    runConsole();
  } else if (tab === "output-tab") {
    run_code();
  }
}

