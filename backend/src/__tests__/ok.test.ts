import * as sinon from "sinon";
import * as chai from "chai";
import { expect } from "chai";
import chaiHttp = require("chai-http");
import { app } from "../app";

chai.use(chaiHttp);

describe("GET /", function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('1 - Return "Ok"', async function () {
    const httpResponse = await chai.request(app).get("/");

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal({ ok: true });
  });
});
