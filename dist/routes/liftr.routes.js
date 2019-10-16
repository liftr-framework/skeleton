"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@liftr/core");
const liftr_controller_1 = require("@controllers/liftr.controller");
exports.liftrRoute = core_1.Route.get('/', liftr_controller_1.liftrController);
