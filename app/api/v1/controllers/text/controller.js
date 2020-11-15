import CrudService from "../../../../services/crud";
import Text from "../../../../models/text";
import uid from "../../../../helpers/uuid";

const addText = async (req, res) => {
  console.log("\n here in add new text ");
  if (!req.body)
    return res.status(400).json({ message: "Bad Request ", data: {} });

  const text_id = uid({ prefix: "TXT" });
  console.log("\n uid  :", text_id);
  const newText = await CrudService.create(Text, { ...req.body, text_id });
  return res.status(newText ? 201 : 500).json({
    message: newText ? "Created Successfully" : "Internel Server Error ",
    data: newText ? { text_id } : {}
  });
};
const getTextById = async (req, res) => {
  const text_id = req.params.textId;
  if (!text_id)
    return res.status(400).json({ message: "Bad Request ", data: {} });

  const textFound = await CrudService.findOne(Text, { text_id });
  if (!textFound)
    return res.status(404).json({ message: "Text Not Found", data: {} });
  else
    return res
      .status(200)
      .json({ message: "Fetched successfully", data: textFound });
};
const getAllTexts = async (req, res) => {
  console.log("\n here in get all texts with paginate");
  let options = {
    page: parseInt(req.query.page || 1),
    limit: parseInt(req.query.limit || 10)
  };
  const textList = await CrudService.findPaginated(Text, {}, options);
  return res.status(textList ? 200 : 500).json({
    message: textList ? "Fetched with success " : "Internal Server Error",
    date: textList ? textList : {}
  });
};
const updateText = async (req, res) => {
  console.log("\n **** Update text content ****");
  const textId = req.params.textId;
  //update a text in one language only , it'll ba same logic
  //if we want to update in all languages, just send all content in body
  const { lang, text } = req.body;
  const textFound = await CrudService.findOne(Text, { text_id: textId });
  if (!textFound) return res.status(404).json({ message: "Text Not Found" });
  const updatedText = await CrudService.updateOne(
    Text,
    { text_id: textId, "content.lang": lang },
    { "content.$.text": text }
  );
  return res.status(updatedText ? 200 : 500).json({
    message: updatedText ? "Updated with success" : "Internet Server Error",
    data: updatedText ? {} : updatedText
  });
};
const getWordsNumber = async (req, res) => {
  console.log("\n **** Fetch total word number of given text ****");
  const textId = req.params.textId;
  const textFound = await CrudService.findOne(Text, { text_id: textId });
  if (!textFound) return res.status(404).json({ message: "Text not found" });
};

const getTotalWordByLang = async (req, res) => {};
const getMostOccurent = async (req, res) => {};
const searchText = async (req, res) => {};
export default {
  addText,
  getTextById,
  getAllTexts,
  updateText,
  getWordsNumber,
  getTotalWordByLang,
  getMostOccurent,
  searchText
};
