document.addEventListener('dblclick', () => {
  chrome.runtime.sendMessage({ action: 'pasteText' });
});
