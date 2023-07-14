"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRouter = void 0;
const express_1 = require("express");
exports.defaultRouter = (0, express_1.Router)();
exports.defaultRouter.get("/", (req, res) => {
    res.send("Whats up ?");
});
//# sourceMappingURL=defaultRoute.js.map