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
        duplicate('dropWrap', 'dropItem', 3)


        var dropDownButton = document.querySelectorAll('[data-toggle=dropdown]');
        Object.keys(dropDownButton).forEach.call(dropDownButton, (key, i) => {
            dropDownButton[i].addEventListener('click', (event) => {
                event.preventDefault();
                var trgt = event.currentTarget.dataset.target;
                var object = document.querySelector(trgt);
                
                object.classList.toggle('open')
                
            })
        })
        
        document.addEventListener("click", function (event) {
            var inDropdown = false;
            for (var node = event.target; node != document.body; node = node.parentNode) {
                if (node.classList.contains('dropdown')) {
                    inDropdown = true;
                    break;
                }
            }
            if(!inDropdown){
                var dropDownButton = document.querySelector('.dropdown-menu.open');
                if(dropDownButton != null){
                    dropDownButton.classList.remove('open')
                }
            }
        });
        
        var scrollPosition = window.scrollY;
        var nav = document.getElementById('nav');

        window.addEventListener('scroll', () => {
            scrollPosition = window.scrollY;

            if (scrollPosition >= 100) {
                nav.classList.add('colored');
            } else {
                nav.classList.remove('colored');
            }
        });



    });/*  */


function mobileMenu() {
    event.preventDefault();
    var nav = document.getElementById('mobileNav');
    if (nav == null) {
        fetch("/html/template/mobile_menu.html")
            .then(function (response) {
                return response.text()
            })
            .then(function (data) {
                document.querySelector("header").insertAdjacentHTML('beforeend', data);
            });
    } else {
        nav.remove();
    }

}