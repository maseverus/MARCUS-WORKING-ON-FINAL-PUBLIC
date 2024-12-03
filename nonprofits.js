document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://partners.every.org/v0.2/nonprofit/maps";
    const apiKey = "pk_live_0c1f6f61a1aae4ed2ab71eeb6f03fbc2";
    const nonprofitContainer = document.getElementById("nonprofit-container");
    const errorContainer = document.getElementById("error-container");

    async function fetchNonprofits() {
        try {
            const response = await fetch(`${apiURL}?apiKey=${apiKey}`);
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            const data = await response.json();
            displayNonprofits(data.nonprofits);
        } catch (error) {
            displayError(error.message);
        }
    }

    function displayNonprofits(nonprofits) {
        nonprofitContainer.innerHTML = "";
        nonprofits.forEach(nonprofit => {
            const card = document.createElement("div");
            card.className = "nonprofit-card";
            card.innerHTML = `
                <h3>${nonprofit.name}</h3>
                <p>${nonprofit.mission || "No description available"}</p>
                <a href="${nonprofit.website}" target="_blank">Visit Website</a>
            `;
            nonprofitContainer.appendChild(card);
        });
    }

    function displayError(message) {
        errorContainer.textContent = `An error occurred: ${message}`;
        errorContainer.style.display = "block";
    }

    fetchNonprofits();
});
