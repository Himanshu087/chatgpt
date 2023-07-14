"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptAuth = void 0;
const express_1 = require("express");
const openai_1 = require("openai");
const congif_1 = require("../congif");
exports.gptAuth = (0, express_1.Router)();
//
exports.gptAuth.get("/hello", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const config = new openai_1.Configuration(congif_1.chatGPTConfig);
    const openai = new openai_1.OpenAIApi(config);
    const response = yield openai.listModels();
    res.send({ success: true, Result: response.data });
}));
//# sourceMappingURL=gptAuth.js.map