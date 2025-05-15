function adjustViewportHeight() {
    const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Adjust on load and resize
window.addEventListener('load', adjustViewportHeight);
window.addEventListener('resize', adjustViewportHeight);