const urlSubstring = 'https://motionpoint.lightning.force.com/lightning/r/Case/'; // Replace with your desired URL substring

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab && tab.url && tab.url.includes(urlSubstring)) {
    chrome.storage.local.get(['cssEnabled'], (result) => {
      if (result.cssEnabled) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: ['style.css']
        }).then(() => {
          console.log("CSS injected successfully.");
        }).catch(err => console.log("Failed to inject CSS:", err));
      }
    });
  }
});
