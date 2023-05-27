import styled from "styled-components";
import { typeColors } from "../../theme/typeColors";

export const Card = styled.li`
background-image: linear-gradient(to bottom, #FF0000, #FF0000),
  linear-gradient(to bottom, #FFF, #FFF);
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-position: top, bottom;
  border: 3px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 250px;
  flex: 1;
`
  

export const PokeImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-direction:row;
  width:125px;
  background-color: ${props => typeColors[props.pokemon.types[0].type.name]};
  border: 3px solid #000;
`;

export const PokeImage = styled.img`
  height: 120px;
  width: 150px;
  
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const NamePokemon = styled.h3`
  text-transform: capitalize;
  font-size: 20px;
  color: #000;
`;

export const ContainerId = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IdPokemon = styled.p`
  display: block;
  text-transform: capitalize;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 3px;
`;

export const ImgGif = styled.img`
  width: 45px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  padding: 0px 6px 10px 0px;
`;
