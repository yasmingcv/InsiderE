window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('teamId');

    if (teamId) {
        fetch('dados/data.json')
            .then(response => response.json())
            .then(data => {
                const team = data.teams.find(t => t.id == teamId);
                if (team) {
                    // Atualize o DOM com as informações do time
                    const teamDetailsContainer = document.getElementById('team-details');
                    teamDetailsContainer.innerHTML = `
                        <p>${team.description}</p>
                    `;
                    teamDetailsContainer.style.backgroundImage = `url(${team.background})`;
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }
};
