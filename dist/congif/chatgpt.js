"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGPTConfig = void 0;
require("dotenv/config");
exports.chatGPTConfig = {
    organization: process.env.CHATGPT_ORGNAME,
    apiKey: process.env.CHATGPT_KEYS,
};
//# sourceMappingURL=chatgpt.js.map