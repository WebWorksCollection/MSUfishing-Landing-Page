function generate_insta_posts() {

    var url = "https://sulfaroa.pythonanywhere.com/msu-fishing-posts";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let pics_container = document.getElementById("pictures-container");
            let pics = document.getElementById("photos");

            var pictuesCollection = ""

            for (let i = 0; i < myJson.data.length; i++) {
                let previews = `<a href="` + myJson.data[i].link + `" target="_blank" rel="noopener"><img class = "instagram-picture" src="` + myJson.data[i].images.standard_resolution.url + `"></a>`;
                pictuesCollection += previews;
            }
            pics.insertAdjacentHTML('beforeend', pictuesCollection);
        });
}

$(document).ready(function() {

    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

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
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})

console.log('hallo')

// get posts
generate_insta_posts();
