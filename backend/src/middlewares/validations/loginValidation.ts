import { ServiceResponse } from '../../Interfaces/ServiceResponse';
import schema from './schema';

type ValidateLoginFields = { email: string, password: string };

const validateLoginFields = (keysObjectValidate: ValidateLoginFields):
ServiceResponse<null> | void => {
  const { error } = schema.loginFields.validate(keysObjectValidate);

  if (error) return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
};

export default validateLoginFields;
