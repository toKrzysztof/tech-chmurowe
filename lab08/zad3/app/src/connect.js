// db.js
import postgres from "postgres";

const sql = postgres("postgres://postgres:example@db:5432/postgres"); // will use psql environment variables

export default sql;