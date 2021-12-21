const { uuid } = require('uuidv4');
const xml2js = require('xml2js')
const fs = require('fs')

const xmlLocation = __dirname + '/mail.xml'

function get(req, res) {
    const parser = new xml2js.Parser();
    let response = []

    fs.readFile(xmlLocation, function (err, data) {
        parser.parseString(data, function (err, result) {
            for (const email of result.emails.email) {
                if (email.$.to === req.params.email) {
                    response.push(email)
                }
            }

            res.status(200).send(response);
        });
    });
}

function send(req, res) {
    const { from, to, subject, content } = req.body;
    const id = uuid();

    const obj = { $: { id, from, to }, subject: [subject], content: [content] }

    const parser = new xml2js.Parser();
    fs.readFile(xmlLocation, function (err, data) {
        parser.parseString(data, function (err, result) {
            result.emails.email.push(obj)
            let builder = new xml2js.Builder();
            let xml = builder.buildObject(result);

            fs.writeFile(xmlLocation, xml, () => {
                res.status(200).redirect(`../mailbox.html?email=${from}`)
            })
        });
    });
}

async function deleteOne(req, res) {
    const parser = new xml2js.Parser();
    fs.readFile(xmlLocation, function (err, data) {
        parser.parseString(data, function (err, result) {
            const newList = []

            for (const email of result.emails.email) {
                if (email.$.id === req.params.id) {
                    continue
                }
                newList.push(email)
            }

            result.emails.email = newList

            let builder = new xml2js.Builder();
            let xml = builder.buildObject(result);

            fs.writeFile(xmlLocation, xml, () => {
                res.status(200)
            })
        });
    });
}

module.exports = { deleteOne, send, get }