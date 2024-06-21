document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');

  // Load the current state
  chrome.storage.local.get(['cssEnabled'], (result) => {
    toggle.checked = result.cssEnabled || false;
    console.log('CSS enabled:', toggle.checked); // Log the initial CSS state
  });

  // Save the state when the toggle is changed
  toggle.addEventListener('change', () => {
    chrome.storage.local.set({ cssEnabled: toggle.checked });
    console.log('toggle', toggle.checked); // Log the initial CSS state
  });
});
