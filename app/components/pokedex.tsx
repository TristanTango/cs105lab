"use client";

import { useState } from "react";

export default function Pokedex() {
  const [search, setSearch] = useState("");

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Pokémon"
              />
              <button>Search</button>
            </div>

          </div>

          <div className="screenContainer">
            <div className="screen">
              <p>Pokémon Display</p>
            </div>
          </div>

        </div>

        <div className="hinge"></div>

        <div className="rightSide">
          <div className="infoScreen">
            <p>Info Panel</p>
          </div>
        </div>

      </div>
    </div>
  );
}