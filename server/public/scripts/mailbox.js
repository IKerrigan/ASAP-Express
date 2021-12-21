const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const { email } = params

const span = document.getElementById('email')
span.innerText = email || "Unknown"

const deleteButtonIds = []

let emails = []

if (email) {
    const newMessageButton = document.getElementById('new-message')
    newMessageButton.setAttribute('href', `create-mail.html?email=${email}`)

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `mail/${email}`);
    xhr.send();

    xhr.addEventListener('load', e => {
        emails = JSON.parse(e.target.responseText)
        insertRows(emails)

        for (const id of deleteButtonIds) {
            const button = document.getElementById(id)
            button.addEventListener('click', () => {
                const xhr = new XMLHttpRequest();
                xhr.open('DELETE', `mail/${id}`);
                xhr.send(JSON.stringify({ email }));
                location.reload()
            })
        }
    })
}

function insertRows(emails) {
    const compileRow = (from, to, content, subject, id) => `<tr> <!-- star --> <td><i class="fa fa-star text-warning"></i></td> <td> <span class="mb-0 text-muted">${from}</span> </td> <!-- Message --> <td> <a class="link" href="view-mail.html?subject=${subject}&content=${content}&from=${from}&to=${to}"> <span class="badge badge-pill text-white font-medium badge-danger mr-2">${subject}</span></a></td> <td> <a class="link" href="view-mail.html?subject=${subject}&content=${content}&from=${from}&to=${to}">${content}</span></a> </td> <td><button id="${id}" class="btn btn-circle btn-danger text-white" href="javascript:void(0)"> <i class="fa fa-trash"></i> </button> </td> </tr>`
    const tbody = document.getElementById('tbody');
    let compiledRows = ''

    for (const data of emails) {
        compiledRows += compileRow(data.$.from, data.$.to, data.content[0], data.subject[0], data.$.id)
        deleteButtonIds.push(data.$.id)
    }

    tbody.innerHTML = compiledRows
}