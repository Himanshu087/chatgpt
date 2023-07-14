import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";
import { chatGPTConfig } from "../congif";

export const gptAuth = Router();
//

gptAuth.get("/hello", async (req, res) => {
  const config = new Configuration(chatGPTConfig);
  const openai = new OpenAIApi(config);
  const response = await openai.listModels();

  res.send({ success: true, Result: response.data });
});
