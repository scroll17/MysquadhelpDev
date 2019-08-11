const NotFound = require("./NotFound");
const Forbidden = require("./Forbidden");
const Gone = require("./Gone");
const InvalidCredentials = require("./InvalidCredentials");
const Conflict = require("./Conflict");
const Locked = require("./Locked");

const AuthenticationTimeout = require("./AuthenticationTimeout");

module.exports = {
    NotFound,
    Forbidden,
    Gone,
    InvalidCredentials,
    AuthenticationTimeout,
    Conflict,
    Locked,
};
