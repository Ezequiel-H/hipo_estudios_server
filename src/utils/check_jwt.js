import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const checkJwt = () =>
  jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.JWKS_URL
    }),
    audience: process.env.JWKS_AUDIENCE,
    issuer: process.env.JWKS_ISSUER,
    algorithms: [process.env.JWKS_ALGORITHM]
  });

export default checkJwt;
