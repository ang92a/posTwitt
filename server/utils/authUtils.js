const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtConfig = require('../middleware/configJWT');

// функция генирации токена, принимает в себя полезную нагрузку
const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env, TOKEN_A, {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  refreshToken: jwt.sign(payload, process.env, TOKEN_R, {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = generateTokens;
