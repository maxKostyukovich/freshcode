const Constants = require( '../constants');
module.exports = (req,res,next) => {
  if(req.headers._id && req.headers.role) {
      if(Constants.ROLES.includes(req.headers.role))
      next();
  }  else {
      next(new Error("Non auth or invalid headers"));
  }
};