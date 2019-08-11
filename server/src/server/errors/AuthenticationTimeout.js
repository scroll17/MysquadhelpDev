const ApplicationError = require('./ApplicationError');
class AuthenticationTimeout extends ApplicationError {
    constructor(message) {
        super(message || 'AuthenticationTimeout !', 419);
    }
}
module.exports = AuthenticationTimeout;
