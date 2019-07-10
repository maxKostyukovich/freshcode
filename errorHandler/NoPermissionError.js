const ApplicationError = require('./ApplicationError');

class NoPermissionError extends ApplicationError {
    constructor(message) {
        super(message || 'Do not have permissions ',403);
    }
}

module.exports = NoPermissionError;