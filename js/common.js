fetch("/html/template/header.html")
    .then(function (response) {
        return response.text()
    })
    .then(function (data) {
        document.querySelector("header").innerHTML = data;
    });


fetch("/html/template/footer.html")
    .then(function (response) {
        return response.text()
    })
    .then(function (data) {
        document.querySelector("footer").innerHTML = data;
    });/*  */

fetch("/html/template/head.html")
    .then(function (response) {
        return response.text()
    })
    .then(function (data) {
        document.querySelector("head").innerHTML = data;
    });/*  */

