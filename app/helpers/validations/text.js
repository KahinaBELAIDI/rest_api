const { body, query } = require("express-validator");

export default {
  addText: [
    body("content")
      .exists()
      .withMessage("content is required")
      .isArray()
      .withMessage("content should be an array")
  ],
  getAllTexts: [],
  updateText: [
    body("lang")
      .exists()
      .withMessage("Language required")
      .isString(),
    body("text")
      .exists()
      .withMessage("text in update is required")
  ],
  getWordsNumber: []
};
