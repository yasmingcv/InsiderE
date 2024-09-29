import { useState, useEffect } from 'react';
import SelectPilotoCard from '../../components/select-piloto-card/SelectPilotoCard';
import "./index.css"
import Navbar from './../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const SelecionaPiloto = () => {
  const [data, setData] = useState(null);
  const [selectedPilots, setSelectedPilots] = useState([]);

  const handleSelectCard = (piloto) => {
    if (selectedPilots.length < 3 && !selectedPilots.includes(piloto)) {
      setSelectedPilots([...selectedPilots, piloto]);
    } else if (selectedPilots.includes(piloto)) {
      setSelectedPilots(selectedPilots.filter(p => p !== piloto));
    }
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem('podioRodada', JSON.stringify(selectedPilots));
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
            <h1 className="font-bold text-center">Monte seu Pódio da Rodada</h1>
            <p className="w-3/4 text-xl text-center"> Selecione os 3 pilotos que você acha que chegarão ao pódio no final da corrida:</p>
            <div className="grid grid-cols-4 gap-4 h-auto divEscolhaPodio">
            {data ? (
                data.pilotos.map((piloto, index) => (
                    <SelectPilotoCard key={index} 
                    onClick={() => handleSelectCard(piloto)}
                    name={piloto.Nome}
                    lastName={piloto.Sobrenome}
                    image={piloto.Foto}
                    team={false}
                    isSelected={selectedPilots.includes(piloto)}
                    textLabel={"º no pódio"}
                    podiumPosition={selectedPilots.indexOf(piloto) + 1} />
                ))
            ) : (
                <p>Carregando times...</p>
            )}
            </div>
            <div className="flex w-full justify-end pr-10">
              <button type="button" className={`text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${selectedPilots.length < 3 ? "cursor-not-allowed": ""}`}
              onClick={handleSubmit}
              disabled={selectedPilots.length < 3 ? true : false}>
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

export default SelecionaPiloto