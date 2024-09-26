import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./index.css";
const TeamDetails = () => {
  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [indexSlide, setIndexSlide] = useState(0);
  const time = 3000;

  useEffect(() => {
    if (id) {
      fetch("/dados/data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const teamFound = data.teams.find((t) => t.id == id);
          setTeam(teamFound);
          iniciarSlideShow(teamFound);
        })
        .catch((error) => console.error("Error fetching the JSON:", error));
    }
  }, [id]);

  const iniciarSlideShow = (team) => {
    const imageContainer = document.getElementById("containerImg");
    const slideShow = () => {
      imageContainer.style.opacity = "0";
      setTimeout(() => {
        imageContainer.style.transition = "opacity 1s";
        imageContainer.style.opacity = "1";
        imageContainer.src = team.imgCars[indexSlide];
      }, 350);

      setIndexSlide((prev) => (prev + 1) % team.imgCars.length);
      setTimeout(slideShow, time);
    };

    slideShow();
  };

  if (!team) {
    return <div>Carregando...</div>;
  }
  console.log(`../../assets/${team.piloto1.Foto}`);

  return (
    <>
      <Navbar showButtons={true} />
      <section id="team-details">
        <section id="team-details-text">
          <img src={team.logo} style={{ width: "300px", height: "auto" }} />
          <p>{team.description}</p>
        </section>
        <section
          id="team-details-images"
          style={{ background: team.background }}
        >
          <div id="piloto1" className="piloto">
            <div>
              <h3 className="pilotoNome">{team.piloto1.Nome}</h3>
              <h1 className="pilotoSobrenome">{team.piloto1.Sobrenome}</h1>
            </div>
            <img
              className="imagem-piloto"
              src={`/src/assets/${team.piloto1.Foto}`}
              alt="Logo do time"
            />
          </div>
          <div id="piloto2" className="piloto">
            <div>
              <h3 className="pilotoNome">{team.piloto2.Nome}</h3>
              <h1 className="pilotoSobrenome">{team.piloto2.Sobrenome}</h1>
            </div>
            <img
              className="imagem-piloto"
              src={`/src/assets/${team.piloto2.Foto}`}
              alt="Logo do time"
            />
          </div>
        </section>
      </section>
      <section className="desempenho">
        <h1 style={{ color: "#000" }}>DESEMPENHO TEMPORADA 23/24</h1>
        <div className="desempenho-img">
          <div className="desempenho-piloto" id="desempenho-piloto-1">
            <div>
              <h3 className="pilotoNome">{team.piloto1.Nome}</h3>
              <h1 className="pilotoSobrenome">{team.piloto1.Sobrenome}</h1>
            </div>
            <img
              className="imagem-piloto pilotoImg1"
              src={`/src/assets/${team.piloto1.Foto}`}
              alt="Piloto 1"
            />
            <ul>
              <li>
                Pontos{" "}
                <span style={{ color: team.color }}>{team.piloto1.Pontos}</span>
              </li>
              <li>
                Vitórias{" "}
                <span style={{ color: team.color }}>
                  {team.piloto1.Vitorias}
                </span>
              </li>
              <li>
                Pódios{" "}
                <span style={{ color: team.color }}>{team.piloto1.Podios}</span>
              </li>
              <li>
                Nacionalidade{" "}
                <span>
                  <img src={team.piloto1.Nacionalidade} alt="" />
                </span>
              </li>
            </ul>
          </div>
          <div className="desempenho-piloto bloco2" id="desempenho-piloto-2">
            <div>
              <h3 className="pilotoNome">{team.piloto2.Nome}</h3>
              <h1 className="pilotoSobrenome">{team.piloto2.Sobrenome}</h1>
            </div>
            <img
              className="imagem-piloto"
              src={`/src/assets/${team.piloto2.Foto}`}
              alt="Piloto 2"
            />
            <ul>
              <li>
                Pontos{" "}
                <span style={{ color: team.color }}>{team.piloto2.Pontos}</span>
              </li>
              <li>
                Vitórias{" "}
                <span style={{ color: team.color }}>
                  {team.piloto2.Vitorias}
                </span>
              </li>
              <li>
                Pódios{" "}
                <span style={{ color: team.color }}>{team.piloto2.Podios}</span>
              </li>
              <li>
                Nacionalidade{" "}
                <span>
                  <img src={team.piloto2.Nacionalidade} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="team-stats" style={{ background: team.color }}>
        <h3>ESTATÍSTICAS</h3>
        <p>Acompanhe as estatísticas da temporada atual.</p>
        <div className="team-stats__stats">
          <div className="team-stats__stats__item">
            <p>VELOCIDADE MÉDIA</p>
            <h3 id="velocidade">
              {team.statsCurrentSeason.averageSpeed}
              <span>km/h</span>
            </h3>
          </div>
          <div className="team-stats__stats__item">
            <p>ACELERAÇÃO MÉDIA</p>
            <h3 id="aceleracao">
              {team.statsCurrentSeason.averageAcceleration}
              <span>s</span>
            </h3>
          </div>
          <div className="team-stats__stats__item">
            <p>VITÓRIAS</p>
            <h3 id="vitorias">{team.statsCurrentSeason.victories}/23</h3>
          </div>
          <div className="team-stats__stats__item">
            <p>PROBAB. DE VITÓRIA</p>
            <h3 id="probabilidadeVitoria">
              {team.statsCurrentSeason.probabilityOfVictory}
              <span>%</span>
            </h3>
          </div>
        </div>
        <div className="team-stats__details">
          <div className="team-stats__details__ranking" id="rankingPilotos">
            <h1>VITÓRIAS POR PILOTO</h1>
            {team.statsCurrentSeason.pilotRanking.map((pilot, index) => (
              <div className="ranking__pilot" key={index}>
                <span>
                  <img
                    className="icon__pilot"
                    src={pilot.picture}
                    alt={`Piloto ${index}`}
                  />
                  <p>{pilot.pilot}</p>
                  <div
                    className="ranking__bar"
                    style={{
                      width: `${
                        (pilot.victories /
                          Math.max(
                            ...team.statsCurrentSeason.pilotRanking.map(
                              (p) => p.victories
                            )
                          )) *
                        55
                      }%`,
                      background: team.color,
                    }}
                  ></div>
                </span>
                <p>{pilot.victories}</p>
              </div>
            ))}
          </div>
          <img id="containerImg" alt="Team Stats" />
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
