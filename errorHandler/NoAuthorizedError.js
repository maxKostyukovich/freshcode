const ApplicationError = require('./ApplicationError');

class NoAuthorizedError extends ApplicationError {
    constructor(message) {
        super(message || 'No User Authorized.',401);
    }
}
module.exports = NoAuthorizedError;