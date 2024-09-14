var images = [
    "https://p.turbosquid.com/ts-thumb/9C/eHVTPS/my/seq/jpg/1701968505/1920x1080/turn_fit_q99/1514931e94580e28685b90a5206dd3ebdf4ceaf7/seq-1.jpg",
    "https://p.turbosquid.com/ts-thumb/9C/eHVTPS/my/seq/jpg/1701968505/1920x1080/turn_fit_q99/1514931e94580e28685b90a5206dd3ebdf4ceaf7/seq-19.jpg"]
let indexSlide = 0
const time = 3000

window.onload = function () {
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
                    //Secao de desempenho do piloto
                    const desempenhoPiloto1 = document.getElementById('desempenho-piloto-1');
                    const desempenhoPiloto2 = document.getElementById('desempenho-piloto-2');
                    desempenhoPiloto1.innerHTML = `
                        <div class="piloto-imagem imagem1">
                            <img src="${team.piloto1.Foto}" alt="Piloto 1 da ${team.name}">
                            <p> <strong>${team.piloto1.Nome}</strong> <br> ${team.piloto1.Sobrenome}</p>
                        </div>
                        <ul>
                            <li>Pontos <span>${team.piloto1.Pontos}</span></li>
                            <li>Vitórias <span>${team.piloto1.Vitorias}</span></li>
                            <li>Pódios <span>${team.piloto1.Podios}</span></li>
                            <li>Nacionalidade <span><img src="${team.piloto1.Nacionalidade}" alt=""></span></li>
                        </ul>
                    `;
                    desempenhoPiloto2.innerHTML = `
                        <ul>
                            <li>Pontos <span>${team.piloto2.Pontos}</span></li>
                            <li>Vitórias <span>${team.piloto2.Vitorias}</span></li>
                            <li>Pódios <span>${team.piloto2.Podios}</span></li>
                            <li>Nacionalidade <span><img src="${team.piloto2.Nacionalidade}" alt=""></span></li>
                        </ul>
                        <div class="piloto-imagem imagem2">
                            <p> <strong>${team.piloto2.Nome}</strong> <br> ${team.piloto2.Sobrenome}</p>
                            <img src="${team.piloto2.Foto}" alt="Piloto 2 da ${team.name}">
                        </div>
                    `;
                    alterarCores(team);

                    const teamStatsContainer = document.getElementById('team-stats')
                    teamStatsContainer.style.background = team.color

                    const velocidade = document.getElementById('velocidade')
                    velocidade.innerHTML = `${team.statsCurrentSeason.averageSpeed}<span>km/h</span>`

                    const aceleracao = document.getElementById('aceleracao')
                    aceleracao.innerHTML = `${team.statsCurrentSeason.averageAcceleration}<span>s</span>`

                    const vitorias = document.getElementById('vitorias')
                    vitorias.innerHTML = `${team.statsCurrentSeason.victories}/23`

                    const probabilidadeVitoria = document.getElementById('probabilidadeVitoria')
                    probabilidadeVitoria.innerHTML = `${team.statsCurrentSeason.probabilityOfVictory}<span>%</span>`

                    const rankingPilotos = document.getElementById('rankingPilotos')

                    const maxVictories = Math.max(...team.statsCurrentSeason.pilotRanking.map(pilot => pilot.victories))

                    team.statsCurrentSeason.pilotRanking.forEach(pilot => {
                        const widthPercentage = (pilot.victories / maxVictories) * 55;
                        rankingPilotos.innerHTML += `
                        <div class="ranking__pilot">
                            <span>
                                <img class="icon__pilot" src=${pilot.picture}></img>
                                <p>${pilot.pilot}</p>
                                <div class="ranking__bar" style= "width: ${widthPercentage}%; background: ${team.color};"></div>
                            </span>
                            <p>${pilot.victories}</p>
                        </div>
                        `
                    })

                    images = team.imgCars
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }
};

function alterarCores(team) {
    // Nova cor para os elementos
    const novaCor = team.color;

    // Selecionar e alterar a cor dos elementos desempenho-piloto ul>li span
    const spans = document.querySelectorAll('.desempenho-piloto ul>li span');
    spans.forEach(span => {
        span.style.color = novaCor;
    });

    // Selecionar e alterar a cor dos elementos piloto-imagem strong
    const strongs = document.querySelectorAll('.piloto-imagem strong');
    strongs.forEach(strong => {
        strong.style.color = novaCor;
    });

    const bordaEspecial = document.querySelector('.desempenho');
    bordaEspecial.classList.add(`${team.class}`);
}

const slideShow = () => {
    const imageContainer = document.getElementById('containerImg')
    imageContainer.style.opacity = '0'

    setTimeout(() => {
        imageContainer.style.transition = 'opacity 1s'
        imageContainer.style.opacity = '1'
        imageContainer.src = images[indexSlide]
    }, 350)

    indexSlide++

    if (indexSlide == images.length) {
        indexSlide = 0
    }

    setTimeout(slideShow, time)
}

slideShow()