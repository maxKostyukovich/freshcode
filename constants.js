const PORT = 3005;
const ROLES = ["ADMIN","USER"];
const GENDER = ["MALE","FEMALE"];
const ACTION = {
   READ:"READ",
   UPDATE:"UPDATE",
   DELETE:"DELETE",
   CREATE:"CREATE"
};
const DB_CON_STRING = "mongodb://localhost/my_database";

module.exports= Object({
   PORT,
   ROLES,
   GENDER,
   ACTION,
   DB_CON_STRING
});