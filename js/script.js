window.onload = function() {
    if (!localStorage.getItem("redirected")) {
        window.location.href = "chooseYourTeam.html";
        localStorage.setItem("redirected", "true");
    }
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
                    const piloto1Container = document.getElementById('piloto1');
                    const piloto2Container = document.getElementById('piloto2');
                    console.log(teamDetailsContainerImages);
                    teamDetailsContainerText.innerHTML = `
                        <img src="${team.logo}" style="width:300px;height:auto;">
                        <p>${team.description}</p>
                    `;
                    teamDetailsContainerImages.style.background = `${team.background}`;
                    piloto1Container.innerHTML = `
                        <div>
                            <h3 class="pilotoNome">${team.piloto1.Nome}</h3>
                            <h1 class="pilotoSobrenome">${team.piloto1.Sobrenome}</h1>
                        </div>
                        <img class="imagem-piloto" src=${team.piloto1.Foto} alt="Logo do time">
                    `;
                    piloto2Container.innerHTML = `
                            <div>
                            <h3 class="pilotoNome">${team.piloto2.Nome}</h3>
                            <h1 class="pilotoSobrenome">${team.piloto2.Sobrenome}</h1>
                        </div>
                        <img class="imagem-piloto" src=${team.piloto2.Foto} alt="Logo do time">
                    `;
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }
};
