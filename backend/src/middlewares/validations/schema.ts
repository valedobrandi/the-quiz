import * as Joi from 'joi';

const loginFields = Joi.object({
  email: Joi.string()
    .min(8)
    .pattern(/[A-Z]/)
    .pattern(/[0-9]/)
    .pattern(/[!@#$%^&*(),.?":{}|<>]/, 'um símbolo')
    .required(),
  password: Joi.string().required(),
});

export default { loginFields };
