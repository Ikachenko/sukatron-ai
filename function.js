document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");
    const aiContainer = document.getElementById("AI");
    const body = document.getElementById("body");
    
    document.addEventListener("click", function() {
        if (intro.style.display !== "none") {
            intro.style.display = "none";
            aiContainer.classList.add("iframe-visible");
            document.querySelectorAll('body > *:not(#ai-container)').forEach(function(element) {
                element.style.filter = 'blur(10px)';
            });
        }
    });

});
