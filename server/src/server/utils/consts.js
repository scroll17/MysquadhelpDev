const PORT = process.env.PORT || 3000;
const SALT_ROUNDS = 8;

const ACCESS_SECRET = "Keep it simple, stupid";
const REFRESH_SECRET = "xzzzzzzzzz";

const EXPIRES_IN_ACCESS = '200min'; //TODO
const EXPIRES_IN_REFRESH = '15d';

const ROLE = ['buyer','creative','admin'];

module.exports = {
    PORT,
    SALT_ROUNDS,
    ACCESS_SECRET,
    REFRESH_SECRET,
    EXPIRES_IN_ACCESS,
    EXPIRES_IN_REFRESH,
    ROLE
};
