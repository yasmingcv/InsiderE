import "./index.css"
import {podium, placeholder} from "../../assets/index"
import Navbar from './../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectPilotoCard from './../../components/select-piloto-card/SelectPilotoCard';
import { useState } from 'react';

const Escalacao = () => {
  const navigate = useNavigate();
  const [maiorPontuador, setMaiorPontuador] = useState(null);
  const [podio, setPodio] = useState(null);
  const [polePosition, setPolePosition] = useState(null);

  useEffect(() =>{
    const maiorPontuador = JSON.parse(localStorage.getItem('maiorPontuador')) || null;
    const podioRodada = JSON.parse(localStorage.getItem('podioRodada')) || [];
    const polePosition = JSON.parse(localStorage.getItem('polePosition')) || null;

    fetch("/dados/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar o JSON: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setMaiorPontuador(data.teams[maiorPontuador]);
        setPolePosition(data.pilotos[polePosition]);
        setPodio(podioRodada);
      })
      .catch((error) => console.error("Error fetching the JSON:", error));
  }, [])

  return (
    <>
    <Navbar showButtons="true" />
    <section className="container-escalacao">
        <h1 className="font-bold">Previsão da Rodada</h1>
        <p>Quem você acha que se dará melhor na rodada? Selecione o seu pódio da corrida, a equipe que mais vai pontuar e o piloto que largará na pole position. </p>
        <section className="previsoes">
        <div className="relative h-[500px] cursor-pointer hover:scale-[102%] duration-200 divPodio" onClick={() => navigate('/podio')}>
          <img src={podium} alt="podio image" className="w-[750px] h-full object-contain podio" />
        {podio && podio.length > 0 && (
          <>
            {podio[0] && (
              <div
                className="absolute"
                style={{ top: '0%', left: '43%' }}
              >
                <img
                  src={`/src/assets/${podio[0].Foto}`}
                  alt={podio[0].Nome}
                  className="w-32 h-32 rounded-full pilotoFotoEscalacao"
                />
                
                <p className="text-center text-white font-bold pilotoNomeEscalacao">{podio[0].Nome} <br />{podio[0].Sobrenome}</p>
              </div>
            )}

            {podio[1] && (
              <div
                className="absolute"
                style={{ top: '7%', left: '22%' }}
              >
                <img
                  src={podio && podio[1] ? `/src/assets/${podio[1].Foto}` : "/src/assets/placeholder.png"}
                  alt={podio && podio[1] ? podio[1].Nome : "Placeholder"}
                  className="w-32 h-32 rounded-full pilotoFotoEscalacao"
                />
                <p className="text-center text-white font-bold pilotoNomeEscalacao">{podio[1].Nome}<br /> {podio[1].Sobrenome}</p>
              </div>
            )}

            {podio[2] && (
              <div
                className="absolute"
                style={{ top: '8%', left: '63%' }}
              >
                <img
                  src={`/src/assets/${podio[2].Foto}`}
                  alt={podio[2].Nome}
                  className="w-32 h-32 rounded-full pilotoFotoEscalacao"
                />
                
                <p className="text-center text-white font-bold pilotoNomeEscalacao">{podio[2].Nome}<br /> {podio[2].Sobrenome}</p>
              </div>
            )}
          </>
        )}
      </div>
          <div className="flex flex-col justify-start items-center gap-[100px] h-full divPole">
            <h3 className="font-bold text-xl text-center">Pole Position</h3>
            <SelectPilotoCard
              name={polePosition ? polePosition.Nome : ""}
              lastName={polePosition ? polePosition.Sobrenome : ""}
              image={polePosition ? polePosition.Foto : "placeholder.png"}
              team={false}
              onClick={() => navigate('/pole')}
              podiumPosition={""}
              textLabel={"Pole Position"}
              isSelected={true} />
          </div>
          <div  className="flex flex-col justify-start items-center gap-[100px] h-full divEquipe">
            <h3 className="font-bold text-xl">Equipe que mais pontuará</h3>
            <SelectPilotoCard 
              name={maiorPontuador ? maiorPontuador.name : ''} 
              image={maiorPontuador ? maiorPontuador.logo : placeholder}
              team={true}
              podiumPosition={""}
              onClick={() => navigate('/maiorPontuadora')}
              isSelected={true}
              textLabel={"Maior Pontuador"} />
          </div>
        </section>
      <h3 className="text-2xl font-bold">Clique nos elementos para editar</h3>
    </section>
    </>
  )
}

export default Escalacao