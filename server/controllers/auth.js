const pool = require('../pool');

function signIn(req, res) {
    const { email, password } = req.body;

    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results)
            res.status(200).redirect(`../mailbox.html?email=${email}`)
        })
}

function signUp(req, res) {
    const { email, firstName, lastName, password } = req.body

    pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
        [firstName, lastName, email, password], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results)
            res.redirect('../description.html')
        })
}

module.exports = {
    signIn,
    signUp
};