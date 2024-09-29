/* eslint-disable react/prop-types */
import "./index.css"

const SelectPilotoCard = (props) => {
  const { name, lastName, image, onClick, isSelected, podiumPosition, textLabel, team } = props;

  return (
    <>
    {
      team ? 
        <div className={`team-card text-gray-900 border-large ${
          isSelected ? 'border-pink-700' : 'border-white'
          }`} 
          onClick={onClick}>
          <img
            src={image || "default-logo.png"}
            alt={`${name} logo`}
          />
          <h2>{name}</h2>
          {isSelected && (
              <div className="text-yellow-300 font-bold">
                {podiumPosition + textLabel}
              </div>
            )}
        </div>
      :
        <div
        className={`flex pilotoCard flex-col items-center border-large h-36 rounded-lg shadow md:flex-row cursor-pointer md:max-w-xs border-gray-700 bg-gray-800 hover:bg-gray-700 hover:scale-105 duration-250 ${
          isSelected ? 'border-white' : 'border-gray-700'
          }`}
          onClick={onClick}
          >
          <img
            className="object-cover w-24 rounded-t-lg h-32 md:rounded-none md:rounded-s-lg"
            src={`/src/assets/${image}`}
            alt={name}
            />
          <div className="flex flex-col justify-between p-4 leading-normal pilotoCardText">
            <h3 className="mb-2 pilotoCardNome text-xl font-bold tracking-tight text-white">
              {name}
            </h3>
            <h1 className="mb-2 pilotoCardSobrenome text-3xl font-bold tracking-tight text-white">
              {lastName}
            </h1>
            {isSelected && (
              <div className="mt-2 text-yellow-300 font-bold">
                {podiumPosition + textLabel}
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default SelectPilotoCard;
