import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../components/Card";

const Search = () => {
  const [searchParams] = useSearchParams();
  // param이 null이면 빈 문자열로 대체
  const param = searchParams.get("pokemon") || "";
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card pokemon={el} key={el.id} />
      ))}
    </>
  );
};

export default Search;
