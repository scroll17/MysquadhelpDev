const ApplicationError = require('./ApplicationError');
class InvalidCredentials extends ApplicationError {
    constructor(message) {
        super(message || 'Invalid credentials !', 401);
    }
}
module.exports = InvalidCredentials;

