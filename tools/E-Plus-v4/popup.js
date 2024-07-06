document.addEventListener('DOMContentLoaded', () => {
  const presetForm = document.getElementById('presetForm');
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
  });

  // When the checkbox changes, update storage and send a message to background.js
  toggleCSS.addEventListener('change', () => {
    chrome.runtime.sendMessage({ action: 'toggleCSS', cssEnabled: toggleCSS.checked });
  });
});
