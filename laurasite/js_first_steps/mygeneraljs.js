
        document.addEventListener('DOMContentLoaded', () => {
            // Load the default content
            loadContent('js_first_steps/content/about.html');

            // Add event listeners to navigation links
            document.querySelectorAll('.dropdown-content a').forEach(link => {
                // for each link create a click event that's ready to load each 'data-link' file
                    link.addEventListener('click', event => {
                    event.preventDefault();
                    page = event.target.getAttribute('data-link');
                    // call the function created below loadContent and then the 'page'
                    loadContent(page);
                });
            });
        });

        function loadContent(page) {
            fetch(page)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('content').innerHTML = html;
                });
        }
 