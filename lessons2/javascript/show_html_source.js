// Function to create modal container if it doesn't exist
function createModalContainer() {
    var modalContainer = document.getElementById('myModal');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'myModal';
        modalContainer.className = 'modal';
        modalContainer.style.display = 'none'; // Hide modal initially
        document.body.appendChild(modalContainer);
    }
    return modalContainer;
}

function showHTMLModal() {
    // Create modal container if it doesn't exist
    var modalContainer = createModalContainer();

    // Clear modal content
    modalContainer.innerHTML = '';

    // Create modal content
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create title element
    var titleElement = document.createElement('h2');
    titleElement.textContent = 'Your own **.html page (including javascript) should look like this in your code editor';
    modalContent.appendChild(titleElement);

    // Add close button
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';
    closeButton.onclick = closeModal;
    titleElement.appendChild(closeButton);

    // Create pre element for source code
    var preElement = document.createElement('pre');
    preElement.id = 'htmlSource';
    preElement.className = 'language-html'; // Add class for styling
    modalContent.appendChild(preElement);

    // Append modal content to the modal container
    modalContainer.appendChild(modalContent);

    var htmlSourceElement = modalContent.querySelector('#htmlSource');

    // Fetch the original HTML source code from the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var htmlSource = xhr.responseText;

            // Remove the modal container and script tags with data-remove attribute
            htmlSource = htmlSource.replace(/<div id="myModal" class="modal"><\/div>/g, '');
            htmlSource = htmlSource.replace(/<script.*?data-remove.*?>[\s\S]*?<\/script>/g, '');

            // Remove HTML comments
            htmlSource = htmlSource.replace(/<!--[\s\S]*?-->/g, '');

            // Manipulate the source code as needed (remove links, scripts, etc.)
            var htmlWithoutLink = htmlSource.replace(/<a[^>]*>[^<]*<\/a>/g, '') // Remove the link
                                            .replace(/<link.*?href="modal\.css".*?>/g, '') // Remove the link to modal.css
                                            .replace(/(<html[^>]*>)/, '$1\n') // Add a line break after <html> opening tag
                                            .replace(/(<\/[^>]+>)/g, '$1\n') // Add line breaks after closing tags
                                            .replace(/(\r\n|\r|\n){2,}/g, '\n\n'); // Remove consecutive newline characters
            htmlWithoutLink = htmlWithoutLink.trim(); // Trim whitespace
            htmlSourceElement.textContent = htmlWithoutLink;

            // Apply basic code highlighting
            htmlSourceElement.innerHTML = syntaxHighlight(htmlSourceElement.innerHTML);
            
            modalContainer.style.display = 'block'; // Show modal after content is loaded
        }
    };
    xhr.send();
}

// Function to apply basic code highlighting
function syntaxHighlight(html) {
    var regex = /(&lt;\/?[^&gt;]+&gt;)/g; // Regex to match HTML tags
    return html.replace(regex, '<span class="html-tag">$1</span>'); // Wrap matched tags with a span for styling
}


function closeModal() {
    var modalContainer = document.getElementById('myModal');
    if (modalContainer) {
        modalContainer.style.display = 'none';
    }
}



// Remove the script tag and modal container from the HTML source
document.addEventListener('DOMContentLoaded', function() {
    var scriptToRemove = document.querySelector('script[data-remove]');
    var modalToRemove = document.getElementById('myModal');

    if (scriptToRemove) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
    }

    if (modalToRemove) {
        modalToRemove.parentNode.removeChild(modalToRemove);
    }
});

document.getElementById('showHTML').addEventListener('click', showHTMLModal);
