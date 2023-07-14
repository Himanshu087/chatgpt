import "dotenv/config";

export const chatGPTConfig = {
  organization: process.env.CHATGPT_ORGNAME,
  apiKey: process.env.CHATGPT_KEYS,
};
