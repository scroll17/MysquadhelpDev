import config from '../boot/config';
export const STORE = config();

export const ROLES = ['admin','buyer','creative'];

export const ERROR = {
    Forbidden: 403,
    NotFound: 404,
    Unauthorized: 401,
    AuthenticationTimeout: 419
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

export const CONTEST = {
    SELECT: "select",
    NAME: "name",
    TAGLINE: "tagline",
    LOGO: "logo",
    BANKS: "banks",
};

export const FIELDS_TO_SEND = [
    "type",
    "name",
    "typeOfVenture",
    "whatVentureDoes",
    "targetCustomers",
    "style",
    "description",
    "userId"
];
