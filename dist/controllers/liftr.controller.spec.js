"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const chai_1 = require("chai");
const liftr_controller_1 = require("./liftr.controller");
describe('src/controllers/liftr.controller.ts', () => {
    let sandbox;
    let req = {};
    let responseStub;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        responseStub = {
            send: sandbox.stub(),
        };
    });
    it('should send a message', () => {
        liftr_controller_1.liftrController(req, responseStub);
        chai_1.expect(responseStub.send).to.be.calledWith('Lift off!');
    });
});
