const ApplicationError = require('./ApplicationError');
class GoneError extends ApplicationError {
    constructor(message) {
        super(message || 'Removed !', 410);
    }
}
module.exports = GoneError;
