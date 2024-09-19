import * as Joi from 'joi';

const loginFields = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default { loginFields };
