import mongoose from "mongoose";
import {
  validateEmail,
  validateTelephone,
  validationPassword,
} from "../validation/validating.js";
const { Schema } = mongoose;

const infoSchema = new Schema(
{
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: {type:String, required: true }
}
);

const formMessage = mongoose.model("book", infoSchema);

export default formMessage;
