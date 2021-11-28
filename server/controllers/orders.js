const pool = require('../pool');

const get = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const create = (request, response) => {
    const { totalPrice, customerId } = request.body

    pool.query('INSERT INTO orders (totalPrice, customerId) VALUES ($1, $2)', [totalPrice, customerId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Order added`)
    })
}

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const { totalPrice, customerId  } = request.body

    pool.query(
        'UPDATE orders SET totalPrice = $1, customerId = $2 WHERE id = $3',
        [totalPrice, customerId, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Order modified with ID: ${id}`)
        }
    )
}

const deleteById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Order deleted with ID: ${id}`)
    })
}

module.exports = {
    deleteById,
    getById,
    create,
    update,
    get,
}