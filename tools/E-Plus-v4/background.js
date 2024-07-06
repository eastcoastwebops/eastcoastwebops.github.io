let selectedText = '';

// Define your preset texts
const presetTexts = [
  { title: "Origin Issue", text: "Hello team,\n\n Upon review, we have determined that this issue is occurring on the origin site. Please review the screenshots attached below.\n\nThis ticket will be set to closed, however do not hesitate to contact us should you need any further assistance.\n\nKind regards,\n" },
   { title: "Generic Closure", text: "Hi team,\n\nWe are pleased to report that we have completed the following item(s) reported in this ticket:\n\n\t 1.CREATE REQUEST SUMMARY FROM SUPPORT TEAM NOTE -- INCLUDE SCREENSHOTS OF FIXED ITEMS\n\n\t2. (anything else)\n\nThis ticket will now be set to closed. Please feel free to make a note in this ticket should you have any further questions or concerns about the above. For a new request, please open a separate ticket.\n\nRegards,\n" },
  { title: "Closure + Items Pending", text: "Hello team,\n\nSince there are currently no actions pending on the MotionPoint side, this ticket will be set to closed. We remain concerned about (INSERT DETAILS ABOUT THE ORIGINAL ISSUE HERE) and are committed to helping in any way we can.\n\nOnce you have an update on your end, please do not hesitate to make a note in this ticket or create a separate ticket referencing this ticket number.\n\nKind regards,\n" },
    { title: "Translation Complete", text: "Team,\n\nI have reviewed this ticket and found that the page you requested has now been translated. A screenshot has been attached to this ticket and I am setting it to complete. If we can be of any further assistance, please do not hesitate to contact us.\n\nThank you,\n" },
    { title: "Request To Clear CDN", text: "Team,\n\nThis appears to be a CDN Issue. We have cleared the MotionPoint servers however it seems the following file(s) will need to be cleared by the customer.\n\n\t1.(file)\n\n\t2.(file)\n\nThank you,\n" },
   { title: "Request for Details", text: "Could you please provide more information?" },
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
        const insertText = (text) => {
          // Insert text into the current focus location
          const activeElement = document.activeElement;
          if (activeElement) {
            if (activeElement.tagName === 'TEXTAREA' ||
                activeElement.tagName === 'INPUT' ||
                activeElement.isContentEditable) {
              activeElement.focus();
              const selection = window.getSelection();
              if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(text));
              } else {
                document.execCommand('insertText', false, text);
              }
            } else {
              // Create a temporary element to handle the paste action
              const tempElem = document.createElement('div');
              tempElem.contentEditable = 'true';
              tempElem.style.position = 'absolute';
              tempElem.style.left = '-9999px';
              document.body.appendChild(tempElem);
              tempElem.focus();
              document.execCommand('insertText', false, text);
              document.body.removeChild(tempElem);
            }
          }
        };

        insertText(text);
      },
      args: [selectedText]
    }).then(() => {
      // Reset selectedText after pasting
      selectedText = '';
      sendResponse({ success: true });
    }).catch(err => {
      console.error("Failed to execute script:", err);
      sendResponse({ success: false });
    });
    return true;  // Indicates we want to send a response asynchronously
  } else if (request.action === 'toggleCSS') {
    chrome.storage.local.set({ cssEnabled: request.cssEnabled });
    sendResponse({ success: true });
  }
});

// Check the URL and inject or remove CSS based on the toggle state
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab && tab.url && tab.url.includes(urlSubstring)) {
    chrome.storage.local.get(['cssEnabled'], (result) => {
      if (result.cssEnabled) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: ['content-styles.css']
        }).then(() => {
          console.log("CSS injected successfully.");
        }).catch(err => console.log("Failed to inject CSS:", err));
      } else {
        chrome.scripting.removeCSS({
          target: { tabId: tabId },
          files: ['content-styles.css']
        }).then(() => {
          console.log("CSS removed successfully.");
        }).catch(err => console.log("Failed to remove CSS:", err));
      }
    });
  }
});
