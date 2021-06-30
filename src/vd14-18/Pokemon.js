import { Typography, Button, CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <div>
        <Typography
          variant="h3"
          style={{ textAlign: "center", borderBottom: "1px solid black" }}
        >
          {name[0].toUpperCase() + name.slice(1)}
          <img src={front_default} alt="#" />
        </Typography>
        <img
          style={{ width: "300px", height: "300px" }}
          src={fullImageUrl}
          alt="#"
        />
        <Typography variant="h4">Pokemon Info:</Typography>
        <div>
          <Typography>
            {"Species: "}
            <Link href={species.url}>{species.name} </Link>
          </Typography>
          <Typography>
            <b>Height: </b>
            {height}{" "}
          </Typography>
          <Typography>
            <b>Weight:</b> {weight}{" "}
          </Typography>
          <Typography>
            <b>Types:</b>
          </Typography>
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}> {`${name}`}</Typography>;
          })}
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button
          variant="contained"
          style={{ margin: "20px" }}
          onClick={() => props.history.push("/")}
        >
          back to pokedex
        </Button>
      )}
    </div>
  );
};

export default Pokemon;
