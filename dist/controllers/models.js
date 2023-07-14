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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const congif_1 = require("../congif");
const allModelsUrl = "https://api.openai.com/v1/models";
const getAllModels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(allModelsUrl, {
        headers: congif_1.axiosHeader,
    });
    res.status(200).json({ success: true, message: result.data });
});
const getModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.model)
        return res.send("No model is passed!!");
    const model = req.params.model;
    try {
        const result = yield axios_1.default.get(allModelsUrl + "/" + model, {
            headers: congif_1.axiosHeader,
        });
        res.status(200).json({ success: true, message: result.data });
    }
    catch (_a) {
        res.status(400).send("No model found");
    }
});
exports.default = { getAllModels, getModel };
//# sourceMappingURL=models.js.map