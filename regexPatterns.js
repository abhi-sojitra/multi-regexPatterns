module.exports = {
  // Credit Card Validation
  creditCard:
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:[0-9]{3})?|(?:2131|1800|35\d{3})\d{11})$/,

  // Phone Number Validation (country code based)
  phoneNumber: {
    USA: /^\+1[2-9]\d{2}[2-9](?!11)\d{6}$/,
    IND: /^\+91\d{10}$/,
    // Add more country codes and their regex patterns here
  },

  // India GST Number Validation
  indiaGST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,

  // Email Validation
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // ZIP Code Validation (USA)
  zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
};
