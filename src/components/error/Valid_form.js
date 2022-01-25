import Validator from "validator";

export const valid_input = (email, password, type) => {
  let messError = {};
  const messObject = {
    type: false,
    message: messError,
  };

  if (!Validator.isEmail(email)) {
    messError.email = "Your email invalid form ";
  }

  if (!Validator.isLength(password, { min: 8, max: 16 })) {
    messError.password = "Length of password must be 8 - 16";
  }

  if (Validator.isAlpha(password)) {
    messError.password = "Your password should have characters and number";
  }

  if (Validator.isNumeric(password)) {
    messError.password = "Your password should have characters and number";
  }

  if (Validator.isEmpty(email)) {
    messError.email = "Please enter your email";
  }
  if (Validator.isEmpty(password)) {
    messError.password = "Please enter your password";
  }

  if (Object.keys(messError).length <= 0) messObject.type = true;
  return messObject;
};
