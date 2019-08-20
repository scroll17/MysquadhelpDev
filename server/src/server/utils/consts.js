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
  REFRESH: "refreshToken"
};

const URL = {
    API: {
        USER: '/user',
        LOGIN: '/login',
        LOGOUT: '/logout',
        ALL_USER: '/alluser',
        USER_ID: '/user/:id',
        REFRESH: '/refresh',
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
};

