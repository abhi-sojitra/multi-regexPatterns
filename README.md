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
  validateWhitespace,
  validateAadharCard,
  validatePanCard,
  validateVoterID,
  validateIpAddress,
  validateURL,
  validateDate,
  validateTime,
  validateHexColor,
  validateUUID
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

// Validate Aadhar card number
console.log(validateAadharCard('123456789012')); // true or false

// Validate PAN card number
console.log(validatePanCard('ABCDE1234F')); // true or false

// Validate Voter ID card number
console.log(validateVoterID('ABC1234567')); // true or false

// Validate IP address
console.log(validateIpAddress('192.168.1.1')); // true or false

// Validate URL
console.log(validateURL('https://example.com')); // true or false

// Validate Date (YYYY-MM-DD)
console.log(validateDate('2023-07-20')); // true or false

// Validate Time (HH:MM:SS)
console.log(validateTime('14:30:00')); // true or false

// Validate Hex Color Code
console.log(validateHexColor('#ff5733')); // true or false

// Validate UUID
console.log(validateUUID('123e4567-e89b-12d3-a456-426614174000')); // true or false


```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

```bash
This setup now includes validations for Aadhar card, PAN card, and Voter ID card numbers alongside the existing validations. Adjust the regex patterns as per the specific rules and formats required for each type of card.
```
