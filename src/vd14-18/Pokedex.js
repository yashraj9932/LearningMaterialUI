import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  TextField,
  fade,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    padding: "25px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },

  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingRight: "20px",
    paddingLeft: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = (props) => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const pokeCard = (pokemonId) => {
    // console.log(pokemonData[`${pokemonId}`]);
    const { id, name } = pokemonData[`${pokemonId}`];
    // console.log(id);
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={12} sm={6} md={4} key={pokemonId}>
        <Card
          onClick={() => {
            props.history.push(`/${pokemonId}`);
          }}
        >
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              label="Pokemon"
              variant="standard"
              onChange={onChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) => {
            return (
              pokemonData[pokemonId].name.includes(filter) &&
              pokeCard(pokemonId)
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
