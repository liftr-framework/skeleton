"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const core_1 = require("@liftr/core");
const LiftrRoutingModule_1 = require("@routes/LiftrRoutingModule");
const swaggerInfo = __importStar(require("./swagger-info"));
const app = express_1.default();
dotenv_1.default.config();
app.set('port', process.env.PORT || 4000);
core_1.useDocs(app, LiftrRoutingModule_1.routes, swaggerInfo.descriptions, swaggerInfo.responses);
core_1.server(app, LiftrRoutingModule_1.routes);
exports.default = core_1.server;
