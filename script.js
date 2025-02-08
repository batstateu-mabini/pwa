if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")  // <-- Updated path
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.log("Service Worker Failed", err));
}

