import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const Schema = mongoose.Schema;

const TextSchema = new Schema(
  {
    text_id: {
      //created using uid
      type: String,
      required: true
    },
    content: [
      {
        lang: {
          type: String,
          default: "fr",
          required: true
        },
        text: {
          type: String,
          default: ""
        },
        is_default: {
          type: Number,
          default: 1
        }
      }
    ]
  },
  { timestamps: true }
);

TextSchema.plugin(mongoosePaginate);
const TextModel = mongoose.model("Text", TextSchema);

TextModel.paginate().then({});
export default TextModel;
