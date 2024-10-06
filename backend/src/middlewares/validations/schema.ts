import * as Joi from 'joi';

const loginFields = Joi.object({
  username: Joi.string().min(4).required(),
  password: Joi.string()
    .min(8)
    .required()
});

export default { loginFields };
