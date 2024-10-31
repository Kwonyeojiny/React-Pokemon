import { useSelector } from "react-redux";
import { Card } from "../components/Card";

const Main = () => {
  const pokemonData = useSelector((state) => state.pokemon.data);

  console.log(pokemonData.data);
  return (
    <>
      {pokemonData.map((el) => (
        <Card pokemon={el} key={el.id} />
      ))}
    </>
  );
};

export default Main;
