// Function to update the quote in the popup
function updateQuote() {
  chrome.storage.local.get('quote', (data) => {
    document.getElementById('quote').textContent = data.quote || "No quote available.";
  });
}

// Event listener for the refresh button
document.getElementById('refresh').addEventListener('click', updateQuote);

// Update the quote when the popup is opened
updateQuote();
