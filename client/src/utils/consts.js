import config from '../boot/config';
export const STORE = config();

export const ROLES = ['admin','buyer','creative'];

export const ERROR = {
    Forbidden: 403,
    NotFound: 404,
};

export const ROLE = {
  CREATIVE: 'creative',
  BUYER: 'buyer',
  ADMIN: 'admin',
};

export const TOKEN = {
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
};