const ApplicationError = require('./ApplicationError');
class BadRequest extends ApplicationError {
    constructor(message) {
        super(message || 'Bad Request !', 400);
    }
}
module.exports = BadRequest;
