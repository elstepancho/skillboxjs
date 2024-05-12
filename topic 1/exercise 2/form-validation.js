document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();

        const validFirstName = validateInput(firstName);
        const validLastName = validateInput(lastName);
        const validMiddleName = validateInput(middleName);

        const paragraph = document.createElement('p');
        paragraph.textContent = `Фамилия: ${validLastName}, Имя: ${validFirstName}, Отчество: ${validMiddleName}`;

        outputDiv.appendChild(paragraph);

        form.reset();
    });

    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(function(input) {
        input.addEventListener('blur', function() {
            const value = input.value.trim();
            const correctedValue = validateInput(value);
            input.value = correctedValue;
        });
    });

    function validateInput(input) {
        const validChars = input.replace(/[^а-яА-Я\- ]/g, '');
        const trimmed = validChars.trim();
        const normalized = trimmed.replace(/[\s\-]+/g, ' ');
        const formatted = normalized.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        return formatted;
    }
});