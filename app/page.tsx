"use client";

import { useState } from "react";
import "./pokedex.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<{
    name: string;
    id: number | string;
    image: string;
    type: string;
    height?: number;
    weight?: number;
    stats?: {
      hp: number;
      attack: number;
      defense: number;
      speed: number;
    };
  } | null>(null);

  async function handleSearch() {
    if (!search) return;

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );

      if (!res.ok) throw new Error("Not found");

      const data = await res.json();

      setPokemon({
  name: data.name,
  id: data.id,
  image: data.sprites.front_default,
  type: data.types.map((t: any) => t.type.name).join(" / "),
  height: data.height,
  weight: data.weight,
  stats: {
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  },
});

    } catch (error) {
      setPokemon({
        name: "Not found",
        id: "???",
        image: "",
        type: "unknown",
      });
    }
  }

  return (
    <div className="container">

      <div className="pokedex">


        <div className="leftSide">

          <div className="topBar">

            <div className="bigLight"></div>

            <div className="smallLights">
              <div className="light red"></div>
              <div className="light yellow"></div>
              <div className="light green"></div>
            </div>

            <div className="searchArea">
              <input
                type="text"
                placeholder="SEARCH..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>

              <button onClick={handleSearch}>
                Search
              </button>
            </div>

          </div>

          {/* SCREEN */}
          <div className="screenContainer">

            <div className="screenLights">
              <div></div>
              <div></div>
            </div>

            <div className="screen">

              {pokemon ? (
                <div>
                  <h2 style={{ textTransform: "capitalize" }}>
                    {pokemon.name}
                  </h2>
                  {pokemon.image && (
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="pokemonImage"
                    />
                  )}
                </div>
              ) : (
                <p>READY...</p>
              )}

            </div>

            <div className="speaker"></div>

          </div>

          {/* CONTROLS */}
          <div className="bottomControls">

            <div className="blueButton"></div>

            <div className="smallButtons">
              <div className="greenBtn"></div>
              <div className="orangeBtn"></div>
            </div>

            <div className="dpad">
              <div className="up"></div>
              <div className="down"></div>
              <div className="left"></div>
              <div className="right"></div>
              <div className="center"></div>
            </div>

          </div>

        </div>

      
        <div className="hinge"></div>
       
        <div className="rightSide">

          <div className="rightTop"></div>

          <div className="infoScreen">
  {pokemon ? (
    <div>
      <h2 style={{ textTransform: "capitalize" }}>
        {pokemon.name}
      </h2>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.type}</p>

      <p>Height: {pokemon.height ? `${pokemon.height / 10} m` : 'N/A'}</p>
      <p>Weight: {pokemon.weight ? `${pokemon.weight / 10} kg` : 'N/A'}</p>

      <p>HP: {pokemon.stats ? pokemon.stats.hp : 'N/A'}</p>
      <p>Attack: {pokemon.stats ? pokemon.stats.attack : 'N/A'}</p>
      <p>Defense: {pokemon.stats ? pokemon.stats.defense : 'N/A'}</p>
      <p>Speed: {pokemon.stats ? pokemon.stats.speed : 'N/A'}</p>
    </div>
  ) : (
    <p>WAITING FOR INPUT...</p>
  )}
</div>

          <div className="blueGrid">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="blueSquare"></div>
            ))}
          </div>

          <div className="tinyLights">

            <div className="tinyOrange"></div>
            <div className="tinyGreen"></div>

            <div className="tinyBars">
              <div className="greenBar"></div>
              <div className="orangeBar"></div>
            </div>

          </div>

          <div className="yellowButtons">

            <div className="yellowBox"></div>
            <div className="yellowBox"></div>

          </div>

        </div>

      </div>

    </div>
  );
}