$(document).ready(function () {

    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})

var element = document.getElementsByClassName('container-fluid')
//element.parentNode.removeChild(element)
console.log(element)

console.log('hallo')

// get posts
generate_insta_posts();

//http://sulfaroa.pythonanywhere.com/msu-fishing-posts

function generate_insta_posts() {

    var url = "http://sulfaroa.pythonanywhere.com/msu-fishing-posts";
    var request = new XMLHttpRequest();


    request.onload = function () {
        obj = JSON.parse(this.responseText);
        console.log(obj.data);

        let pics_container = document.getElementById("pictures-container");
        let pics = document.getElementById("photos");

        for (let i = 0; i < obj.data.length; i++) {
            let previews = `<a href="` + obj.data[i].link + `" target="_blank" rel="noopener"><img class = "instagram-picture" src="` + obj.data[i].images.standard_resolution.url + `"></a>`;
            pics.insertAdjacentHTML('beforeend', previews);
        }
    }
    // Initialize a request
    request.open('get', url)

    // Send it
    request.send()
}