import controller from "./controller";
import express from "express";

const router = express.Router();

export default router
  .post("/", controller.addText)
  .get("/:textId", controller.getTextById)
  .get("/", controller.getAllTexts)
  .put("/:textId", controller.updateText);
