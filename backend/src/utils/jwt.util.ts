// src/utils/jwt.util.ts

import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  email: string,
};

function jwtSign(payload: TokenPayload): string {
  const token = sign(payload, secret, { noTimestamp: true });

  return token;
}

function jwtVerify(bearer: string): TokenPayload {
  const token = bearer.split(' ')[1];

  const data = verify(token, secret) as TokenPayload;
  return data;
}

export {
  jwtSign,
  jwtVerify,
};
