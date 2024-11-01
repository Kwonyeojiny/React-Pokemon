import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

const FavoriteButton = ({ pokemonId }) => {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      className={isFavorite ? "text-[red] ml-2" : "ml-2"}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
    >
      {isFavorite ? `♥` : `♡`}
    </button>
  );
};

export default FavoriteButton;
