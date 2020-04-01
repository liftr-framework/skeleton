import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response, NextFunction } from 'express';
import { liftrMiddleware } from './liftr.middleware';

describe('src/middleware/liftr.middleware.ts', () => {
    const nextResponse = 'next!';
    let sandbox: sinon.SinonSandbox;
    let req: Partial<Request> = {};
    let responseStub: Partial<Response>;
    let nextStub: sinon.SinonStub;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        responseStub = {
            send: sandbox.stub(),
        }
        nextStub = sinon.stub().returns(nextResponse);
    });

    it('should call next' , () => {
        liftrMiddleware(req as Request, responseStub as Response, nextStub as NextFunction);
        expect(nextStub).to.be.called;
    });
});
