const pool = require('../pool');

const get = (request, response) => {
    pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const create = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO customer (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Customer added`)
    })
}

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE customers SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Customer modified with ID: ${id}`)
        }
    )
}

const deleteById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Customer deleted with ID: ${id}`)
    })
}

module.exports = {
    deleteById,
    getById,
    create,
    update,
    get,
}