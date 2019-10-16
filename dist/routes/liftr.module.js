"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@liftr/core");
const liftr_routes_1 = require("./liftr.routes");
const liftr_schema_1 = require("../schema/liftr.schema");
const liftr_middleware_1 = require("@middlewares/liftr.middleware");
exports.LiftrModule = core_1.Module([
    {
        route: liftr_routes_1.liftrRoute,
        middleware: [liftr_middleware_1.liftrMiddleware],
        schema: liftr_schema_1.liftrRouteschema,
    },
]);
