"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosHeader = void 0;
require("dotenv/config");
exports.axiosHeader = {
    Authorization: "Bearer " + process.env.CHATGPT_KEYS,
    "Content-Type": "application/json",
};
//# sourceMappingURL=axiosHeader.js.map