import Navbar from "../../components/navbar/Navbar";
import "./index.css";

const RankingUsers = () => {
  const rankingItems = [
    {
      position: '01',
      name: "Alice Silva",
      points: 123,
      imgSrc: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg",
    },
    {
      position: '02',
      name: "Bruno Costa",
      points: 110,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNCg79jrcETrs7GV3b6otTQDyjGDlUF-bYg&s",
    },
    {
      position: '03',
      name: "Carla Pereira",
      points: 95,
      imgSrc: "https://img.freepik.com/psd-gratuitas/retrato-de-mulher-vestindo-rosa_23-2150944402.jpg?semt=ais_hybrid",
    },
    {
      position: '04',
      name: "Daniel Oliveira",
      points: 90,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpMsFrtRhZFzqOQXD60gtHbvBL3aI9UKMRQ&s",
    },
    {
      position: '05',
      name: "Elena Martins",
      points: 85,
      imgSrc: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2022/06/formacao_bem-aventuradas-as-mulheres-que-promovem-o-autoamor.jpg",
    },
    {
      position: '06',
      name: "Felipe Almeida",
      points: 80,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhavL7kf0r1XUrJh3qTzjB8IQwGG_xrVLRg&s",
    },
    {
      position: '07',
      name: "Gabriela Santos",
      points: 75,
      imgSrc: "https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg",
    },
    {
      position: '08',
      name: "Henrique Lima",
      points: 70,
      imgSrc: "https://static.vecteezy.com/ti/fotos-gratis/t2/46836830-sorridente-adolescencia-garoto-dentro-sala-de-aula-britanico-alto-escola-estudante-educacao-e-estude-ambiente-juventude-e-diversidade-conceito-foto.jpg",
    },
    {
      position: '09',
      name: "Isabela Ferreira",
      points: 65,
      imgSrc: "https://midias.jornalcruzeiro.com.br/wp-content/uploads/2020/03/O-que-%C3%A9-ser-mulher-hoje-0.jpg",
    },
    {
      position: 10,
      name: "João Vitor",
      points: 60,
      imgSrc: "https://www.designi.com.br/images/preview/11833353.jpg",
    },
    {
      position: 11,
      name: "Karina Souza",
      points: 55,
      imgSrc: "https://img.freepik.com/fotos-gratis/retrato-de-adolescente-feliz-por-voltar-a-universidade_23-2148586575.jpg",
    },
    {
      position: 12,
      name: "Lucas Rocha",
      points: 50,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkEEPmCUyhgs1x3iATh48N0pk5d4EWjI1xzPlDxpDLvSyjHRxICV85BFmOJ9igC9mJw0&usqp=CAU",
    },
    {
      position: 13,
      name: "Mariana Teixeira",
      points: 45,
      imgSrc: "https://images.ctfassets.net/u4vv676b8z52/4c2tX9AzsyZAKwPV5N0OAF/29220a8785433707bd6fabdfaae15815/parents_teen.jpg?fm=jpg&q=80",
    },
    {
      position: 14,
      name: "Natália Gomes",
      points: 40,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40Npe5OTzFjTjp1VsBtkhjgGdItmHmMjhyw&s",
    },
    {
      position: 15,
      name: "Otávio Santos",
      points: 35,
      imgSrc: "https://media.istockphoto.com/id/1500076632/pt/foto/happy-black-student-in-high-school-looking-at-camera.jpg?s=612x612&w=0&k=20&c=KyuVkJ5cEPydAKcjwHLsiyYpn1ysrWOLpBlCvZme7mg=",
    },
    {
      position: 16,
      name: "Patrícia Mendes",
      points: 30,
      imgSrc: "https://blog.brandili.com.br/wp-content/uploads/2023/03/meninausandocamisetaverdeneoncombinandocomoshortspreto.jpg",
    },
    {
      position: 17,
      name: "Renan Alves",
      points: 25,
      imgSrc: "https://www.unicef.org/uruguay/sites/unicef.org.uruguay/files/styles/hero_tablet/public/HeroImage_ficha8.png.webp?itok=okZSeLrI",
    },
    {
      position: 18,
      name: "Sofia Martins",
      points: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDI4jusOG3j61Caq0pQfxru8qkxrCYcz0Cw&s",
    },
    {
      position: 19,
      name: "Tiago Lima",
      points: 15,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgUfXpw_Lhw7n-1rwuOFVpwSJlLhjJ1dTnQ&s",
    },
    {
      position: 20,
      name: "Vanessa Ferreira",
      points: 10,
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Anderson_Sophie_Portrait_Of_Young_Girl.jpg/250px-Anderson_Sophie_Portrait_Of_Young_Girl.jpg",
    },
  ]

  return (
    <div className="ranking-users">
      <Navbar showButtons="true" showJogar="true" />
      <h1>Ranking de Usuários</h1>
      <div className="ranking-users-container">
        <div className="classification">
        {rankingItems.map((item) => (
        <div className="classification-item" key={item.position}>
          <span>
            <p>{item.position}</p>
            <img className="rounded-full" src={item.imgSrc} alt={item.name} />
            <p>{item.name}</p>
          </span>
          <p className="ranking-points">{item.points} pontos</p>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default RankingUsers;
