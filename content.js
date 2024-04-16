// content.js
const adsSelectors = [
    "div[id*='ads']",
    "div[class*='ads']",
    "div[class*='ad']",
    "div[id*='ad']",
    "iframe[src*='ad']"
  ];
  
  function removeAds() {
    adsSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.remove();
      });
    });
  }
  
  removeAds();
  