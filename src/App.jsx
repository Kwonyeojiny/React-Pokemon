import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

function App() {
  const dispatch = useDispatch();
  // store를 만들때 전달한 reducer에 이름으로 찍어준 값
  const pokemonData = useSelector((state) => state.pokemon);

  console.log(pokemonData);

  useEffect(() => {
    // 151번까지 받아 올것이다
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return <></>;
}

export default App;
