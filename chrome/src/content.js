//content script can not use chrome.tabs.query
chrome.runtime.sendMessage({greeting: chrome.i18n.getMessage('Hello')}, function(response) {
    console.log('The response of background sciprt:', response.farewell);
});
