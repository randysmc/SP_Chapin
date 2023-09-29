const { Pool } = require("pg");
const {db} = require('./config');
/*
const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "supermarket"
});*/

  const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database:db.database
});

module.exports = pool;
