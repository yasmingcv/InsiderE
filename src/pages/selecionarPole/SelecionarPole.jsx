import { useState, useEffect } from 'react';
import SelectPilotoCard from '../../components/select-piloto-card/SelectPilotoCard';
import "./index.css"
import Navbar from './../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const SelecionarPole = () => {
  const [data, setData] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectCard = (index) => {
    setSelectedCard(index);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem('polePosition', JSON.stringify(selectedCard));
    setTimeout(() => {
      navigate('/escalacao'); 
    }, 1000);
  }

  useEffect(() => {
    fetch("/dados/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar o JSON: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching the JSON:", error));
  }, []);

  return (
    <>
        <Navbar showButtons="true"/>
        <section className="container-pilotos">
            <h1 className="font-bold">Quem vai ser o Pole Position da Rodada?</h1>
            <p className="w-3/4 text-xl text-center"> Selecione o piloto que você acha que será o pole position da corrida:</p>
            <div className="grid grid-cols-4 gap-4 h-auto divEscolhaPodio">
            {data ? (
                data.pilotos.map((piloto, index) => (
                    <SelectPilotoCard key={index} 
                    onClick={() => handleSelectCard(index)}
                    name={piloto.Nome}
                    lastName={piloto.Sobrenome}
                    image={piloto.Foto}
                    podiumPosition={""}
                    team={false}
                    textLabel={"Pole Position"}
                    isSelected={selectedCard === index} />
                ))
            ) : (
                <p>Carregando times...</p>
            )}
            </div>
            <div className="flex w-full justify-end pr-10">
              <button type="button" className={`text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${selectedCard ? "" : "cursor-not-allowed"}`}
              onClick={handleSubmit}
              disabled={!selectedCard}>
              Confirmar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
        </section>
    </>
  )
}

export default SelecionarPole