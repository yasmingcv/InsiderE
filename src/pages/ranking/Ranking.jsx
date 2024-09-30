import Navbar from "../../components/navbar/Navbar";
import SelectPilotoCard from "../../components/select-piloto-card/SelectPilotoCard";
import "./index.css";
const Ranking = () => {
  return (
    <div className="ranking">
      <Navbar showButtons="true" showJogar="true" />
      <h1>Resultados da última corrida</h1>
      <p>Realizada no dia 29 de setembro de 2024</p>
      <div className="ranking-container">
        <div className="relative h-[500px] cursor-pointer hover:scale-[102%] duration-200 divPodio">
          <img
            src="/assets/podium.webp"
            alt="podio image"
            className="w-[750px] h-full object-contain podio"
          />

          <>
            <div className="absolute" style={{ top: "0%", left: "43%" }}>
              <img
                src="/assets/images/mahindra/piloto1.png"
                alt="Edoardo Mortara"
                className="w-32 h-32 rounded-full pilotoFotoEscalacao"
              />

              <p className="text-center text-white font-bold pilotoNomeEscalacao">
                Edoardo <br /> Mortara
              </p>
            </div>

            <div className="absolute" style={{ top: "7%", left: "22%" }}>
              <img
                src="/assets/images/abt/piloto1.png"
                alt="Lucas Di Grassi"
                className="w-32 h-32 rounded-full pilotoFotoEscalacao"
              />
              <p className="text-center text-white font-bold pilotoNomeEscalacao">
                Lucas <br /> Di Grassi
              </p>
            </div>

            <div className="absolute" style={{ top: "8%", left: "63%" }}>
              <img
                src="/assets/images/nissan/piloto1.png"
                alt="Sacha Fenestraz"
                className="w-32 h-32 rounded-full pilotoFotoEscalacao"
              />

              <p className="text-center text-white font-bold pilotoNomeEscalacao">
                Sacha <br /> Fenestraz
              </p>
            </div>
          </>
        </div>

        <div className="ranking-item ranking-teams">
          <h3>Pódio de equipes</h3>

          <div className="cards-teams">
            <div className="team-card" style={{ background: "#FFD700" }}>
              <img
                src="https://static-files.formula-e.pulselive.com/badges/fa97d2e7-02ca-4983-a930-4fdaa245a852.svg"
                alt="Logo da mahindra"
              />
              <h2>Mahindra Racing</h2>
            </div>
            <div className="team-card" style={{ background: "#C0C0C0" }}>
              <img
                src="https://static-files.formula-e.pulselive.com/badges/0176f3e2-1247-494d-9a8d-b0950437ee8f.svg"
                alt="Logo da NEOM McLaren Formula E Team"
              />
              <h2>NEOM McLaren Formula E Team</h2>
            </div>
            <div className="team-card" style={{ background: "#CD7F32" }}>
              <img
                src="https://static-files.formula-e.pulselive.com/badges/c57e46c4-8163-44f6-9c0d-b74579d51000.svg"
                alt="Logo da ABT CUPRA FORMULA E TEAM"
              />
              <h2>ABT CUPRA FORMULA E TEAM</h2>
            </div>
          </div>
        </div>

        <div className="ranking-item pole-position">
          <h3>Pole position</h3>
          <SelectPilotoCard
            name="Paul Aron"
            lastName="Aron"
            image="https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_563,w_1000/v1/f3/articles/2023/08_August/GettyImages-1579997459_1"
            team={true}
            onClick={() => {
              console.log("cricou");
            }}
            podiumPosition={""}
            textLabel=""
            isSelected={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
