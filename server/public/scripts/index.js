const buttonElement = document.getElementById('light-button');
const blockElement = document.getElementById('content');

const menuDivElement = document.getElementById("section-5");

let darkTheme = false;

buttonElement.addEventListener('click', function (event) {
    if (darkTheme) {
        buttonElement.style.backgroundColor = "whitesmoke";
        blockElement.style.backgroundColor = "whitesmoke";
        blockElement.style.color = "#212121";
        darkTheme = false
    } else {
        buttonElement.style.backgroundColor = "#616161";
        blockElement.style.backgroundColor = "#212121";
        blockElement.style.color = "whitesmoke";
        darkTheme = true
    }
});

buttonElement.addEventListener('mouseover', function (event) {
    if (darkTheme) {
        buttonElement.style.backgroundColor = "whitesmoke";
    } else {
        buttonElement.style.backgroundColor = "#616161";
    }
})

buttonElement.addEventListener('mouseout', function (event) {
    if (darkTheme) {
        buttonElement.style.backgroundColor = "whitesmoke";
        buttonElement.style.backgroundColor = "#616161";
    } else {
        buttonElement.style.backgroundColor = "#616161";
        buttonElement.style.backgroundColor = "whitesmoke";
    }
})

let menu = [{ name: "Home", file: "domain.html", id: "home" },
{ name: "News", file: "lists.html", id: "news" },
{ name: "About us", file: "description.html", id: "info" },
{ name: "Services", file: "services.html", id: "services" },
{ name: "Careers", file: "index.html", id: "careers" },
{ name: "Contact us", file: "index.html", id: "contacts" },
{
    name: "Quote", id: "quote", type: "select", options: [
        { name: "Mexico", id: "mexico-o", file: "mexicoQuote.html" },
        { name: "Canada", id: "canada-o", file: "mexicoQuote.html" },
        { name: "Europe", id: "europe-o", file: "mexicoQuote.html" },
    ]
}
];

menuDivElement.innerHTML = "";

function openFile(file) {
    return function () { window.open(file) };
}

menu.forEach(element => {
    const { name, id, file } = element;
    let type = element.type || "button";

    let newElement = document.createElement(type);

    newElement.className = "menu";
    newElement.id = id;

    if (type === "button") {
        newElement.innerHTML = name;
        setTimeout(function () { document.querySelector(`#${id}`).addEventListener('click', openFile(file)) }, 0)
    }

    if (type === "select") {
        let html = "";
        element.options.forEach(o => {
            let newOption = document.createElement("option");
            newOption.id = o.id;
            newOption.setAttribute("value", o.file);
            newOption.innerHTML = o.name;

            html += newOption.outerHTML;
        })

        newElement.innerHTML = html;

        setTimeout(function () {
            document.querySelector(`#${element.id}`).addEventListener('change', function (e) { openFile(e.target.value)() }, 0);
        })
    }

    menuDivElement.innerHTML += newElement.outerHTML;
})

jQuery(document).ready(function ($) {
    $(".et-icon-facebook").click(function () {
        window.open("https://www.facebook.com/asapexp/");
    })
    $(".et-icon-instagram").click(function () {
        window.open("https://www.instagram.com/asap_expressinc/");
    })
    $(".et-icon-twitter").click(function () {
        window.open("https://twitter.com/ASAP_Express/");
    })
    $(".et-icon-pinterest").click(function () {
        window.open("https://www.pinterest.com/pin-builder/?url=https%3A%2F%2Fasapexpressinc.com%2F2021%2F02%2F05%2Fasap-customers-raise-over-6000-to-fight-human-trafficking%2F&media=https%3A%2F%2Fasapexpressinc.com%2Fwp-content%2Fuploads%2F2021%2F02%2FTAT-Event.png&description=ASAP%20Customers%20Raise%20over%20%248000%20to%20Fight%20Human%20Trafficking&method=button");
    })
});
