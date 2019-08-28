const PORT = process.env.PORT || 3000;
const SALT_ROUNDS = 8;

const ACCESS_SECRET = "Keep it simple, stupid";
const REFRESH_SECRET = "xzzzzzzzzz";

const EXPIRES_IN_ACCESS = '30min'; //TODO
const EXPIRES_IN_REFRESH = '15d';

const ROLE = {
    ADMIN: "admin",
    BUYER: "buyer",
    CREATIVE: "creative",
};
const ROLES = ['buyer','creative','admin'];

const TOKEN = {
  ACCESS: "accessToken",
  REFRESH: "refreshToken",
  MAX_NUMBER_OF_REFRESH_TOKEN: 3
};

const URL = {
    API: {
        AUTHORIZE: '/authorize',
        SIGNUP: '/signup',
        LOGIN: '/login',
        LOGOUT: '/logout',
        ALL_USER: '/alluser',
        USER_ID: '/user/:id',
        REFRESH: '/refresh',

        CONTEST: '/contest'
    }
};

const ABILITY = {
    SUBJECT: {
        USER: "User",
        CONTEST: "Contest",
        ALL: "all",
    },
    ACTIONS:{
        CREATE: "create",
        READ: "read",
        UPDATE: "update",
        DELETE: "delete",
        MANAGE: "manage", // управлять
        CRUD: "crud",
    }
};

const HTTP_CODE = {
    SUCCESS: {
        OK: {
            CODE: 200,
            TEXT: 'OK',
        }
    },
    SERVER_ERROR:{
        INTERNAL_SERVER_ERROR:{
            CODE: 500,
            TEXT: 'Internal Server Error'
        },
        UNAUTHORIZED:{
            CODE: 401,
            TEXT: 'Unauthorized'
        },
        NOT_FOUND:{
            CODE: 404,
            TEXT: 'Not found'
        },
        REMOVED:{
            CODE: 410,
            TEXT: 'Removed'
        },
        FORBIDDEN:{
            CODE: 403,
            TEXT: 'Forbidden'
        },
        CONFLICT:{
            CODE: 409,
            TEXT: 'Conflict'
        },
        BAD_REQUEST:{
            CODE: 400,
            TEXT: 'Bad Request'
        },
        AUTHENTICATION_TIMEOUT:{
            CODE: 419,
            TEXT: 'AuthenticationTimeout'
        }
    }
};

module.exports = {
    PORT,

    SALT_ROUNDS,

    ACCESS_SECRET,
    REFRESH_SECRET,
    EXPIRES_IN_ACCESS,
    EXPIRES_IN_REFRESH,
    TOKEN,

    ROLES,
    ROLE,

    URL,

    ABILITY,

    HTTP_CODE,
};

