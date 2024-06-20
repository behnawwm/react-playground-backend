import resumeModel from "../models/book.js";
import middleware from "../middleware/paginate.js";
import formMessage from "../models/book.js";

export const getForm = async (req, res, next) => {
  const paginateResult = middleware(resumeModel);
  await paginateResult(req, res, next);
  try {
    res.status(200).json(res.paginatedResult);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createForm = async (req, res) => {
  const form = req.body;
  const newForm = new formMessage(form);

  try {
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
