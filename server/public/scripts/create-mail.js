const aDiscard = document.getElementById('discard')
const send = document.getElementById('send')
const to = document.getElementById('to')
const from = document.getElementById('from')
const subject = document.getElementById('subject')
const content = document.getElementById('content')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

from.setAttribute("value", params.email)
aDiscard.setAttribute("href", `mailbox.html?email=${params.email}`);