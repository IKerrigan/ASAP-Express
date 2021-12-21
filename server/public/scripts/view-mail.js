const subject = document.getElementById('subject')
const from = document.getElementById('from')
const to = document.getElementById('to')
const content = document.getElementById('content')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

subject.innerText = params.subject;
content.innerText = params.content;
from.innerText = params.from;
to.innerText = params.to;