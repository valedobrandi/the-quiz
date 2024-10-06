import * as sinon from 'sinon';
import {expect} from 'chai';
import usersModalClass from '../../../models/UserModel'

const usersModel = new usersModalClass();

describe('UNIT TEST - USERS MODEL', function () {
    afterEach(function () { sinon.restore() });

    it('01 - Register a user with success', async function () {
  
      const register = await usersModel.register('test', 'test');
  
      expect(register).to.be.an('object');
      expect(register).to.contain({ username: 'test'});
    });
  });