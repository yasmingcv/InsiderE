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
                    const teamDetailsContainerText = document.getElementById('team-details-text');
                    const teamDetailsContainerImages = document.getElementById('team-details-images');
                    console.log(teamDetailsContainerImages);
                    teamDetailsContainerText.innerHTML = `
                        <img src=${team.logo} alt="Logo do time">
                        <p>${team.description}</p>
                    `;
                    teamDetailsContainerImages.style.background = `${team.background}`;
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }
};
