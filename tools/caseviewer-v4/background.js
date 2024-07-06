let selectedText = '';

// Define your preset texts
const presetTexts = [
  { title: "Origin Issue", text: "Hello team,\n\n Upon review, we have determined that this issue is occurring on the origin site. Please review the screenshots attached below.\n\nThis ticket will be set to closed, however do not hesitate to contact us should you need any further assistance.\n\nKind regards,\n" },
  { title: "Translation Complete", text: "Team,\n\nI have reviewed this ticket and found that the page you requested has now been translated. A screenshot has been attached to this ticket and I am setting it to complete. If we can be of any further assistance, please do not hesitate to contact us.\n\nThank you,\n" },
  { title: "Request for Details", text: "Could you please provide more information?" },
  { title: "Farewell", text: "Wishing you a great day ahead!" },
  { title: "Acknowledgment", text: "I will review this and respond to you shortly." }
];

const urlSubstring = 'https://motionpoint.lightning.force.com/lightning/r/Case/';

// Handle messages from popup.js and content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPresets') {
    sendResponse(presetTexts);
  } else if (request.action === 'setSelectedText') {
    selectedText = request.text;
    sendResponse({ success: true });
  } else if (request.action === 'pasteText') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: (text) => {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
          activeElement.focus();
          document.execCommand('insertText', false, text);
        }
      },
      args: [selectedText]
    });
    sendResponse({ success: true });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab && tab.url && tab.url.includes(urlSubstring)) {
    chrome.storage.local.get(['cssEnabled'], (result) => {
      if (result.cssEnabled) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: ['styles.css']
        }).then(() => {
          console.log("CSS injected successfully.");
        }).catch(err => console.log("Failed to inject CSS:", err));
      }
    });
  }
});
