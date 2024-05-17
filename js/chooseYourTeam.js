window.onload = carregaTimes;  // Corrigido para atribuir a função corretamente

function carregaTimes(){
    fetch('dados/data.json')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('teams-container');
            data.teams.forEach(team => {
                const teamElement = document.createElement('div');
                teamElement.classList.add("team-card");
                teamElement.setAttribute('data-id', team.id);
                teamElement.innerHTML = `<img src="${team.logo}" alt="${team.nome} logo"><h2>${team.name}</h2>`;
                teamsContainer.appendChild(teamElement);
            });

            // Adicionando o event listener após os elementos terem sido criados
            const teamCards = document.querySelectorAll(".team-card");
            teamCards.forEach(teamCard => {
                teamCard.addEventListener("click", () => {
                    const teamId = teamCard.getAttribute('data-id');
                    window.location.href = `index.html?teamId=${teamId}`;
                });
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
}
