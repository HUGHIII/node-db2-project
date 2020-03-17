const knex = require("knex");
const knexfile = require("../knexfile");
const dbconfig = knexfile.development;

module.exports = knex(dbconfig);
