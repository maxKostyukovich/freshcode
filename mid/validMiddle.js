const scheme = require('../utils/validation');
const ValidationError = require('../errorHandler/ValidationError');
module.exports = (req, res, next) => {
    scheme.validate(req.body)
        .then(() => next())
        .catch(err => next(new ValidationError(err.message)));
};