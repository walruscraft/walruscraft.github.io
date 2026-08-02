document.addEventListener('DOMContentLoaded', function () {
    const danglingObjects = document.querySelectorAll('.dangling-object');

    danglingObjects.forEach(function(danglingObject) {
        // Mouse events
        danglingObject.addEventListener('mouseover', pauseAnimation);
        danglingObject.addEventListener('mouseout', resumeAnimation);

        // Touch events
        danglingObject.addEventListener('touchstart', pauseAnimation);
        danglingObject.addEventListener('touchend', resumeAnimation);
    });

    function pauseAnimation() {
        this.style.animationPlayState = 'paused';
    }

    function resumeAnimation() {
        this.style.animationPlayState = 'running';
    }
});
