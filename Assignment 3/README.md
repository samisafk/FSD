# Form Validation with Password Activation

## Overview
This project implements a simple HTML and JavaScript-based form validation system with a password-based activation mechanism. Users must enter a correct password to enable the text input fields for entering their mobile number and email. Once activated, the form performs validation checks before submission.

## Features
- Password-protected activation of text input fields.
- Input validation for mobile number (10 digits only).
- Input validation for email (standard email format required).
- Confirmation prompt before submitting the form.
- User-friendly UI with alerts for incorrect inputs.

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
```
project-folder/
│-- index.html  # Main HTML file
│-- styles.css  # CSS file 
│-- script.js   # JavaScript logic 
```

## Installation & Usage
1. Open the `index.html` file in any modern web browser.
2. Click the "Activate Textboxes" button and enter the password (`admin123` by default).
3. If the password is correct, the textboxes for mobile number and email will be enabled.
4. Enter a valid mobile number (10 digits) and a properly formatted email address.
5. Click "Submit" to validate and confirm the form submission.

## Validation Rules
- **Mobile Number**: Must be exactly 10 digits.
- **Email**: Must follow a standard email format (e.g., `user@example.com`).

## Error Handling
- If an incorrect password is entered, the text fields remain disabled.
- If invalid data is entered in any field, an alert is displayed with an appropriate error message.

## Customization
- Change the activation password by modifying the `password` variable in the JavaScript function `activateTextboxes()`.
- Adjust UI styling in the CSS section.

## Future Enhancements
- Improve security by hashing the activation password.
- Store and validate user input using backend integration.
- Add real-time validation with inline error messages.


