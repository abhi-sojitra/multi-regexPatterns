# Regex Validator

A Node.js package for various regex validations, including credit card validation, phone number validation based on country code, India GST number validation, email validation, and ZIP code validation.

## Installation

```bash
npm install regex-validator
```

## Usage

```bash
const {
  validateCreditCard,
  validatePhoneNumber,
  validateIndiaGST,
  validateEmail,
  validateZipCode,
  validateWhitespace
} = require('regex-validator');

// Validate credit card
console.log(validateCreditCard('4111111111111111')); // true or false

// Validate phone number
console.log(validatePhoneNumber('+919876543210', 'IND')); // true or false

// Validate India GST number
console.log(validateIndiaGST('22AAAAA0000A1Z5')); // true or false

// Validate email
console.log(validateEmail('example@example.com')); // true or false

// Validate ZIP code
console.log(validateZipCode('12345-6789')); // true or false

// Validate whitespace at start and end
console.log(validateWhitespace(' example ')); // true or false

```
