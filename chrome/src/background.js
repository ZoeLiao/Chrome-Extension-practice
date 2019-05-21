chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log("The color is green.");
    });
});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    console.log(msg.greeting)
    sendResponse({ farewell: 'bye!' }); 
})
