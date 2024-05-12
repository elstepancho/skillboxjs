document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function (event) {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        } else {
            dropdownMenu.classList.add('show');
        }
    });

    document.addEventListener('click', function (event) {
        var isClickInside = dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);
        if (!isClickInside) {
            dropdownMenu.classList.remove('show');
        }
    });
});