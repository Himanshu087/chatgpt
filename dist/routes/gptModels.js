"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptModels = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.gptModels = (0, express_1.Router)();
exports.gptModels.get("/models", controllers_1.models.getAllModels);
exports.gptModels.get("/models/:model", controllers_1.models.getModel);
//# sourceMappingURL=gptModels.js.map