if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa/sw.js")  // Adjusted for root folder
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.log("Service Worker Failed", err));
}

