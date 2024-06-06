document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded

    // Get all the image-interaction elements
    const imageInteractions = document.querySelectorAll('.image-interaction');

    // Loop through each image-interaction element 
    imageInteractions.forEach((imageInteraction) => {
        // Add mouseenter event listener
        imageInteraction.addEventListener('mouseenter', () => {
            // Show overlays when mouse enters
            imageInteraction.querySelector('.overlays').style.opacity = '1';
        });

        // Add mouseleave event listener
        imageInteraction.addEventListener('mouseleave', () => {
            // Hide overlays when mouse leaves
            imageInteraction.querySelector('.overlays').style.opacity = '0';
        });
    });
});
