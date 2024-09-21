import { useEffect, useState } from 'react';
import Navbar from './../../components/navbar/Navbar';
import "./index.css"

const ChooseYourTeam = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/dados/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar o JSON: ' + response.status);
                }
                return response.json()
            })
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    }, []);

  return (
    <>
    <Navbar showButtons={true}/>
    <main>
        <h1>ESCOLHA SUA EQUIPE</h1>
        <section id="teams-container">
        {data ? (
                data.teams.map(team => ( 
                <div key={team.id} className="team-card" data-id={team.id} onClick={() => window.location.href = `index.html?teamId=${team.id}`}>
                    <img src={team.logo || 'default-logo.png'} alt={`${team.name} logo`} />
                    <h2>{team.name}</h2>
                </div>
            ))
        ) : (
            <p>Carregando times...</p>
        )}
        </section>
    </main>        
    </>
  )
}

export default ChooseYourTeam