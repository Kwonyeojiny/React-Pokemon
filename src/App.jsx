import { useEffect } from "react";
import "./App.css";

function App() {
  // 데이터를 받아 오는거기 때문에 비동기적으로 처리 (Redux에서 비동기처리는 thunk)
  useEffect(() => {
    // 인덱스
    const numberArray = Array.from({ length: 151 }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      const pokemonData = {
        id: 1,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1${pokemonId}.png`,
      };
      return pokemonData;
    };

    const fetchPokemonDatas = async () => {
      const pokemonDatas = await Promise.all(
        numberArray.map((el) => fetchAPI(el))
      );
      console.log(pokemonDatas);
    };

    fetchPokemonDatas();
  }, []);

  return <></>;
}

export default App;
