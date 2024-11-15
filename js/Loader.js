window.addEventListener('load', function () {
    // Hide loader after the page has loaded
    document.getElementById('loader').style.display = 'none';
});

// Function to hide the loader after some operation
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Function to show the loader when needed
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

// Example usage: Show loader for 3 seconds before hiding
setTimeout(function() {
    showLoader(); // Show loader
    setTimeout(hideLoader, 3000); // Hide loader after 3 seconds
}, 500);