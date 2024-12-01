document.addEventListener('DOMContentLoaded', () => {
    const volunteerButton = document.getElementById('volunteer-now');
    const formContainer = document.createElement('div');
    formContainer.id = 'volunteer-form-container';
    formContainer.style.display = 'none';

    formContainer.innerHTML = `
        <form id="volunteer-form">
            <h3>Volunteer Contact Form</h3>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <button type="submit">Submit</button>
        </form>
    `;

    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.appendChild(formContainer);
    }

    volunteerButton.addEventListener('click', () => {
        formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    });

    const charityDetails = document.getElementById('charity-details');
    if (charityDetails) {
        charityDetails.addEventListener('mouseover', () => {
            const hoverMessage = document.createElement('p');
            hoverMessage.id = 'hover-message';
            hoverMessage.textContent = 'Learn more about how you can help this cause!';
            charityDetails.appendChild(hoverMessage);
        });

        charityDetails.addEventListener('mouseout', () => {
            const hoverMessage = document.getElementById('hover-message');
            if (hoverMessage) {
                hoverMessage.remove();
            }
        });
    }
});
