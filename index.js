document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.querySelector('.text-container');
    const toggleReadLink = document.querySelector('.toggle-read');

    const updateToggleLinkText = () => {
        if (textContainer.classList.contains('expanded')) {
            toggleReadLink.textContent = 'Read less';
        } else {
            toggleReadLink.textContent = 'Read more';
        }
    };

    toggleReadLink.addEventListener('click', function (event) {
        event.preventDefault();
        textContainer.classList.toggle('expanded');
        updateToggleLinkText();
    });

    textContainer.addEventListener('click', function () {
        textContainer.classList.toggle('expanded');
        updateToggleLinkText();
    });
});
