const scheme = require('../utils/validation');
module.exports = (req, res, next) => {
    scheme.validate(req.body)
        .then(() => next())
        .catch(err => {console.log(err.message);next(new Error(err.message))});
};