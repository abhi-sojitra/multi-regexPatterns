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

// Function to validate whitespace at start and end
function validateWhitespace(str) {
  return regexPatterns.whitespace.test(str);
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

// Function to validate IP address
function validateIpAddress(ipAddress) {
  return regexPatterns.ipAddress.test(ipAddress);
}

// Function to validate URL
function validateURL(url) {
  return regexPatterns.url.test(url);
}

// Function to validate Date (YYYY-MM-DD)
function validateDate(date) {
  return regexPatterns.date.test(date);
}

// Function to validate Time (HH:MM:SS)
function validateTime(time) {
  return regexPatterns.time.test(time);
}

// Function to validate Hex Color Code
function validateHexColor(hexColor) {
  return regexPatterns.hexColor.test(hexColor);
}

// Function to validate UUID
function validateUUID(uuid) {
  return regexPatterns.uuid.test(uuid);
}

module.exports = {
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
  validateUUID,
};
