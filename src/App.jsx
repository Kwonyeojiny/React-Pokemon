import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // store를 만들때 전달한 reducer에 이름으로 찍어준 값
  // const pokemonData = useSelector((state) => state.pokemon);
  // console.log(pokemonData);

  useEffect(() => {
    // 151번까지 받아 올것이다
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <div className="font-dungGeunMo">
      <h1 className="border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[30px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <span>🔎</span>
          <input
            className="w-[120px] border-b border-[darkgray] px-2"
            onChange={(e) => {
              navigate(`/search?pokemon=${e.target.value}`);
            }}
          />
        </div>
      </nav>
      <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
