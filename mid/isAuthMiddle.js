const Constants = require( '../constants');
const NoAuthorizedError = require('../errorHandler/NoAuthorizedError');

module.exports = (req,res,next) => {
  if(req.headers._id && req.headers.role) {
      if(Constants.ROLES.includes(req.headers.role))
      next();
  }  else {
      next(new NoAuthorizedError());
  }
};