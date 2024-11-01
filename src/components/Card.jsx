import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";
import { memo } from "react";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  img {
    width: 120px;
  }
`;

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);

  const [isImageLoaing, setIsImageLoading] = useState(true);

  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoaing ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center ">
          Loading...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoaing ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
