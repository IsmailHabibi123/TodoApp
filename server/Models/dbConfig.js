import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool ({
    user : "postgres",
    password : "ismailadmin",
    host : "localhost",
    port : "5432",
    database : "TodoDB"
});


export default pool;