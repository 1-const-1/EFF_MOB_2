"use strict";

import * as knex from "knex";

/**
 * Knex.js (ORM)
 * PostgreSQL Client
 */
export const kxclnt = knex({
  client: "pg",
  connection: {
    user: "admin",
    database: "app_2",
    port: 5432,
    host: "127.0.0.1",
    password: "none",
    ssl: false,
  },
  pool: {min: 0, max: 2000000},
});