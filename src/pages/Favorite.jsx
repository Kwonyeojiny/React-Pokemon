import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../components/Card";

const Favorite = () => {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <div className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
};

export default Favorite;
