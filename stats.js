// Send message to background script to retrieve blocked ads count
chrome.runtime.sendMessage({ action: 'getBlockedAdsCount' }, function(response) {
    // Update the HTML content with the retrieved count
    document.getElementById('adsBlocked').textContent = response.count;
});
