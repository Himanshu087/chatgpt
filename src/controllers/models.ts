import axios, { AxiosResponse } from "axios";
import { axiosHeader } from "../congif";
const allModelsUrl = "https://api.openai.com/v1/models";

const getAllModels = async (req, res) => {
  const result: AxiosResponse = await axios.get(allModelsUrl, {
    headers: axiosHeader,
  });
  res.status(200).json({ success: true, message: result.data });
};

const getModel = async (req, res) => {
  if (!req.params.model) return res.send("No model is passed!!");
  const model = req.params.model;
  try {
    const result: AxiosResponse = await axios.get(allModelsUrl + "/" + model, {
      headers: axiosHeader,
    });
    res.status(200).json({ success: true, message: result.data });
  } catch {
    res.status(400).send("No model found");
  }
};

export default { getAllModels, getModel };
