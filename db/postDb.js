const pool = require("./db");


async function  viewPostQuery() {
    const { rows } = await pool.query(`
            SELECT 
              users.firstname,
              users.lastname,
              users.member_status,
              users.username,
              message.title,
              message.description
              FROM users
              LEFT JOIN message ON message.user_id = users.id;
        `);
     return rows;
}

module.exports = {
    viewPostQuery,

}