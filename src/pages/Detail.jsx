import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div
      className="bg-white 
      flex flex-col justify-center items-center 
      border border-black border-b-[8px] border-r-[8px]
      py-[30px] px-[60px] rounded-[10px]"
    >
      <div className="text-[30px] mb-[10px] ">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      {/* <img className="w-[200px]" src={pokemon.front} /> */}
      <FlipCard back={pokemon.back} front={pokemon.front} />
    </div>
  );
};

export default Detail;
