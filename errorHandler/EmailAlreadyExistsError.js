const ApplicationError = require('./ApplicationError');

class EmailAlreadyExistsError extends ApplicationError {
    constructor(message) {
        super(message || 'Email already exists',409);
    }
}

module.exports = EmailAlreadyExistsError;