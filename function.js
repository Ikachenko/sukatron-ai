document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");
    const aiContainer = document.getElementById("AI");
    
    document.addEventListener("click", function() {
        if (intro.style.display !== "none") {
            intro.style.display = "none !important";
            aiContainer.classList.add("iframe-visible");
        }
    });

});