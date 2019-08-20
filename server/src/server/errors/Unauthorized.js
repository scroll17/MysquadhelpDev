const ApplicationError = require('./ApplicationError');
class Unauthorized extends ApplicationError {
    constructor(message) {
        super(message || 'Unauthorized !', 401);
    }
}
module.exports = Unauthorized;

