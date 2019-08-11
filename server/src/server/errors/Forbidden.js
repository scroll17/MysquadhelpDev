const ApplicationError = require('./ApplicationError');
class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message || 'Forbidden !', 403);
    }
}
module.exports = ForbiddenError;
