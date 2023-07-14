import "dotenv/config";

export const axiosHeader = {
  Authorization: "Bearer " + process.env.CHATGPT_KEYS,
  "Content-Type": "application/json",
};
