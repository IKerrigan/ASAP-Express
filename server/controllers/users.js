const pool = require('../pool');

async function get(req, res) {
    const { id } = req.query

    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])
    res.status(200).send(user)
}

module.exports = {
    get,
};