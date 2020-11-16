const { validationResult } = require("express-validator");

export function validate(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  next();
}

export function validateWithUpload(files) {
  return (req, res, next) => {
    const errors = validationResult(req);
    let errResp = null;

    if (!errors.isEmpty()) {
      errResp = errors.array();
    }

    files.forEach(file => {
      if (file.required && (!req.files || !req.files[file.name])) {
        if (!errResp) errResp = [];
        errResp.push({
          msg: file.name + " is required",
          param: file.name
        });
      }
    });

    if (errResp) {
      return res.status(422).json({ errors: errResp });
    }

    next();
  };
}

export const customToArray = value =>
  value && value != "" ? value.split(",") : [];

export function validateArray(value, label) {
  if (!value || value == "") throw new Error(label + " shouldn't be empty");
  try {
    value = customToArray(value);
    return value;
  } catch (err) {
    throw new Error(label + " should be an array");
  }
}

export { default as exampleValidation } from "./text";
