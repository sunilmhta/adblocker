// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getBlockedAdsCount') {
        // Retrieve the count of blocked ads from storage or any other source
        let blockedAdsCount = 100; // Example: Replace with your logic to get the actual count
        // Send the count back to the content script
        sendResponse({ count: blockedAdsCount });
    }
});
