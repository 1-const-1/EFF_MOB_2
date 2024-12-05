import * as pg from "pg";

/**
 * PostgreSQL Client
 */
export const pgclnt = new pg.Client({
  user: "admin",
  database: "app_2",
  port: 5432,
  host: "127.0.0.1",
  password: "none",
  ssl: false,
});