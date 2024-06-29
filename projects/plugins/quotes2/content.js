console.log("Content script loaded.");

let isQuoteDisplayed = false;

function showQuotePopup(quote) {
  if (isQuoteDisplayed) {
    // If a quote is already displayed, do nothing
    return;
  }

  if (quote === "Next Quote") {
    // If the quote is the placeholder "Next Quote", do nothing
    return;
  }

  isQuoteDisplayed = true;

  // Create popup container
  const popupContainer = document.createElement('div');
  popupContainer.id = 'quote-popup';
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '-400px'; // Initially position above the page
  popupContainer.style.left = '50%'; // Position horizontally in the middle
  popupContainer.style.transform = 'translateX(-50%)'; // Center horizontally
  //popupContainer.style.transform = 'translateY(-20%)'; // Center horizontally
  popupContainer.style.transition = 'top 4s ease'; // Add transition effect for smooth animation
  popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popupContainer.style.color = 'white';
  popupContainer.style.padding = '10px';
  popupContainer.style.boxShadow = '10px 10px 100px #000000';
  popupContainer.style.borderRadius = '15px';
  popupContainer.style.border = '1px solid #ff9900';
  popupContainer.style.zIndex = '10000';

  // Create quote text element
  const quoteElement = document.createElement('div');
  quoteElement.textContent = quote;
  popupContainer.appendChild(quoteElement);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.marginTop = '5px';
  closeButton.style.backgroundColor = 'white';
  closeButton.style.color = 'black';
  closeButton.style.left = '50%';
  closeButton.style.border = 'none';
  closeButton.style.padding = '5px 10px';
  closeButton.style.borderRadius = '10px';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', () => {
    popupContainer.style.top = '-400px'; // Slide the popup above the page
    isQuoteDisplayed = false; // Reset the flag
    setTimeout(() => {
      document.body.removeChild(popupContainer);
    }, 1500); // Delay removing the popup to match the transition duration
    setTimeout(displayNextQuote, 200000); // Set timer for next quote after 20 seconds
  });
  popupContainer.appendChild(closeButton);

  // Append popup container to the body
  document.body.appendChild(popupContainer);

  // Trigger reflow to enable CSS transition
  void popupContainer.offsetHeight;

  // Animate the popup to drop in from the top
  popupContainer.style.top = '25%';
}

function displayNextQuote() {
  // Here you should fetch the next quote from your array or source
  // Replace "Next Quote" with your actual logic to fetch the next quote
  const nextQuote = "Next Quote"; // Replace this with your actual code
  showQuotePopup(nextQuote);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in content script:", request);
  if (request.action === 'showQuote') {
    showQuotePopup(request.quote);
    sendResponse({ status: "Quote displayed" });
  }
});
