"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const liftr_module_1 = require("./liftr.module");
exports.routes = [
    {
        path: '/',
        module: liftr_module_1.LiftrModule,
        middleware: [],
    },
];
