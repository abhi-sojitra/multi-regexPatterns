const regexPatterns = require("./regexPatterns");

// Function to validate credit card number
function validateCreditCard(cardNumber) {
  return regexPatterns.creditCard.test(cardNumber);
}

// Function to validate phone number based on country code
function validatePhoneNumber(phoneNumber, countryCode) {
  const pattern = regexPatterns.phoneNumber[countryCode];
  return pattern ? pattern.test(phoneNumber) : false;
}

// Function to validate India GST number
function validateIndiaGST(gstNumber) {
  return regexPatterns.indiaGST.test(gstNumber);
}

// Function to validate email
function validateEmail(email) {
  return regexPatterns.email.test(email);
}

// Function to validate ZIP code
function validateZipCode(zipCode) {
  return regexPatterns.zipCode.test(zipCode);
}

module.exports = {
  validateCreditCard,
  validatePhoneNumber,
  validateIndiaGST,
  validateEmail,
  validateZipCode,
};
