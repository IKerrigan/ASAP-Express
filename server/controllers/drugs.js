const pool = require('../pool');

const get = (request, response) => {
    pool.query('SELECT * FROM drugs ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM drugs WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const create = (request, response) => {
    const { name, price } = request.body

    pool.query('INSERT INTO drugs (name, price) VALUES ($1, $2)', [name, price], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Drug added`)
    })
}

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, price } = request.body

    pool.query(
        'UPDATE drugs SET name = $1, price = $2 WHERE id = $3',
        [name, price, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Drug modified with ID: ${id}`)
        }
    )
}

const deleteById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM drugs WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Drug deleted with ID: ${id}`)
    })
}

module.exports = {
    deleteById,
    getById,
    create,
    update,
    get,
}