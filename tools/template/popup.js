document.addEventListener('DOMContentLoaded', () => {
  const presetForm = document.getElementById('presetForm');
  const cssInput = document.getElementById('cssInput');
  const injectCSSButton = document.getElementById('injectCSS');
  const toggleCSS = document.getElementById('toggleCSS');

  // Get the preset texts from background.js
  chrome.runtime.sendMessage({ action: 'getPresets' }, (response) => {
    response.forEach(preset => {
      const div = document.createElement('div');
      const input = document.createElement('input');
      const label = document.createElement('label');

      input.type = 'radio';
      input.name = 'preset';
      input.value = preset.text;
      input.addEventListener('change', () => {
        chrome.runtime.sendMessage({ action: 'setSelectedText', text: preset.text });
      });

      label.textContent = preset.title;
      label.appendChild(input);

      div.appendChild(input);
      div.appendChild(label);
      presetForm.appendChild(div);
    });
  });

  // Load the CSS enabled state from storage and set the checkbox accordingly
  chrome.storage.local.get(['cssEnabled'], (result) => {
    toggleCSS.checked = result.cssEnabled || false;
    console.log('CSS enabled:', toggleCSS.checked); // Log the initial CSS state
  });

  // When the checkbox changes, update storage and send a message to background.js
  toggleCSS.addEventListener('change', () => {
    chrome.storage.local.set({ cssEnabled: toggleCSS.checked });
    console.log('CSS enabled state:', toggleCSS.checked); // Log the changed CSS state
    if (toggleCSS.checked) {
      chrome.runtime.sendMessage({ action: 'setCSS', css: cssInput.value });
    } else {
      chrome.runtime.sendMessage({ action: 'setCSS', css: '' });
    }
  });

  // Handle CSS Injection
  injectCSSButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'setCSS', css: cssInput.value });
  });
});
