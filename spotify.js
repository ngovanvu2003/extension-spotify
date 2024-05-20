const container = document.getElementsByClassName("video-ads ytp-ad-module")[0];

const observer = new MutationObserver(() => {
   // Lấy element button
   const skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
   if (skipButton){
      // Nhấn vào button để skip quảng cáo
      skipButton.click();
   }
});

observer.observe(container, {childList: true});

const containerSpotify = document.getElementsByClassName("deomraqfhIAoSB3SgXpu")[0];

const spotify = new MutationObserver(() => {
   // Lấy element button
   const skipButton = document.getElementsByClassName("mnipjT4SLDMgwiDCEnRC")[0];
   if (skipButton){
      // Nhấn vào button để skip quảng cáo
      skipButton.click();
   }
});

spotify.observe(containerSpotify, {childList: true});