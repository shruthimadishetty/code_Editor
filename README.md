Code Editor Web Application Documentation

Table of Contents

1. Introduction
2. Installation
3. Usage
4. Components
   - HTML Structure
   - CSS Styles
   - JavaScript Functions
5. Functionality
   - Dark Mode Toggle
   - Live Code Execution
   - Modal Management
6. External Libraries




Introduction
This documentation provides a comprehensive guide for the Code Editor web application. This application allows users to write and execute HTML, CSS, and JavaScript code in real-time within their web browser. It includes features such as dark mode toggling and modal forms for user login and signup.


Installation
To use this Code Editor, simply clone the repository and open the `index.html` file in a web browser. Ensure you have an active internet connection to load external libraries from CDNs.

## Usage
1. Open the `index.html` file in a web browser.
2. Write your HTML, CSS, and JavaScript code in the respective textareas.
3. View the live output in the iframe on the right side of the editor.
4. Use the provided buttons to toggle dark mode and open login/signup modals.

## Components

1. HTML Structure
The `index.html` file contains the following main sections:
Head Section: Includes meta tags, font links, icon links, external CSS, and script links.
Body Section: Contains the navigation bar, main editor container, and modal containers for login and signup.



2. CSS Styles
The `style.css` file defines the styling for various components including:
- Navigation bar
- Buttons (dark mode, login, signup)
- Main editor container
- Modals (login, signup)

3.JavaScript Functions
The `app.js` file includes the following key functions:
`run_code()`: Executes the code written in the editor and displays the output.
`toggleDarkMode()`: Toggles the dark mode for the application.
`showModal(modalId)`: Displays the specified modal.
`closeModal(modalId)`: Closes the specified modal.

## Functionality

1.Dark Mode Toggle
The application includes a dark mode toggle button implemented using the `toggleDarkMode` function. This function switches the CSS class of the body element to `dark-mode`, applying the dark theme styles.

2.Live Code Execution
The `run_code` function is called whenever the user types in the HTML, CSS, or JavaScript textareas. It dynamically updates the content of an iframe to show the output of the written code.

3.Modal Management
The application includes modal forms for login and signup. These modals can be shown or hidden using the `showModal` and `closeModal` functions, respectively.

## External Libraries
The application uses the following external libraries:
Google Fonts: For the Poppins font family.
Font Awesome: For icons.
Ensure that the links to these libraries are maintained in the `index.html` file for proper functionality.

This documentation provides a detailed overview of the Code Editor web application, including its structure, functionality, and usage. For further customization and development, modify the respective HTML, CSS, and JavaScript files accordingly.
