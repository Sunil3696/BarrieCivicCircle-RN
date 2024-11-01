// helpers/validationHelpers.js
//validating email format
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  //validaiting password
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  