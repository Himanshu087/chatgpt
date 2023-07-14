"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const defaultRoute_1 = require("./defaultRoute");
const gptAuth_1 = require("./gptAuth");
const gptModels_1 = require("./gptModels");
exports.routes = express_1.default.Router();
exports.routes.use(defaultRoute_1.defaultRouter);
exports.routes.use(gptAuth_1.gptAuth);
exports.routes.use(gptModels_1.gptModels);
//# sourceMappingURL=index.js.map