console.log("Content script loaded.");

function showQuote(quote) {
  console.log("Attempting to display quote:", quote);
  let quoteElement = document.getElementById('random-quote');
  if (!quoteElement) {
    quoteElement = document.createElement('div');
    quoteElement.id = 'random-quote';
    quoteElement.style.position = 'fixed';
    quoteElement.style.bottom = '10px';
    quoteElement.style.right = '10px';
    quoteElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    quoteElement.style.color = 'white';
    quoteElement.style.padding = '10px';
    quoteElement.style.borderRadius = '5px';
    quoteElement.style.zIndex = '10000';
    document.body.appendChild(quoteElement);
  }
  quoteElement.textContent = quote;
  console.log("Quote displayed:", quote);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in content script:", request);
  if (request.action === 'showQuote') {
    showQuote(request.quote);
    sendResponse({ status: "Quote displayed" });
  }
});
