"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@liftr/core");
exports.liftrRouteschema = core_1.Joi.object().keys({
    message: core_1.Joi.string().required(),
});
