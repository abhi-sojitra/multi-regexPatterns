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

// Function to validate Aadhar card number
function validateAadharCard(aadharNumber) {
  return regexPatterns.aadharCard.test(aadharNumber);
}

// Function to validate PAN card number
function validatePanCard(panNumber) {
  return regexPatterns.panCard.test(panNumber);
}

// Function to validate Voter ID card number
function validateVoterID(voterIDNumber) {
  return regexPatterns.voterID.test(voterIDNumber);
}

module.exports = {
  validateCreditCard,
  validatePhoneNumber,
  validateIndiaGST,
  validateEmail,
  validateZipCode,
  validateAadharCard,
  validatePanCard,
  validateVoterID,
};
