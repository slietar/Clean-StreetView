let active = new Set();

chrome.browserAction.onClicked.addListener((tab) => {
  if (active.has(tab.id)) {
    active.delete(tab.id);
    chrome.tabs.removeCSS({ file: 'styles.css' });
  } else {
    active.add(tab.id);
    chrome.tabs.insertCSS({ file: 'styles.css' });
  }
});

