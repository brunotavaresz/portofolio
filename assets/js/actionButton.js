document.addEventListener('DOMContentLoaded', function () {
    // Keep the URL clean and start at the top when the page is reloaded
    if (window.location.hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    window.scrollTo(0, 0);
});
