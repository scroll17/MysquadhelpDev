const ApplicationError = require('./ApplicationError');
class AuthenticationTimeout extends ApplicationError {
    constructor(message) {
        super(message || 'Conflict !', 409);
    }
}
module.exports = AuthenticationTimeout;
