//content script can not use chrome.tabs.query
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log('The response of background sciprt:', response.farewell);
});
