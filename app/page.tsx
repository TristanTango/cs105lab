import "./pokedex.css";

export default function Home() {
  return (
    <div className="container">

      <div className="pokedex">

        {}
        <div className="leftSide">

          {}
          <div className="topBar">

            <div className="bigLight"></div>

            <div className="smallLights">
              <div className="light red"></div>
              <div className="light yellow"></div>
              <div className="light green"></div>
            </div>

            <div className="searchArea">
              <input type="text" placeholder="SEARCH..." />
              <button>Search</button>
            </div>

          </div>

          {}
          <div className="screenContainer">

            <div className="screenLights">
              <div></div>
              <div></div>
            </div>

            <div className="screen">
              <p>READY...</p>
            </div>

            <div className="speaker"></div>

          </div>

          {}
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

        {}
        <div className="hinge"></div>

        {}
        <div className="rightSide">

          <div className="rightTop"></div>

          {}
          <div className="infoScreen">
            <p>WAITING FOR INPUT...</p>
          </div>

          {}
          <div className="blueGrid">

            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>

            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>
            <div className="blueSquare"></div>

          </div>

          {}
          <div className="tinyLights">

            <div className="tinyOrange"></div>
            <div className="tinyGreen"></div>

            <div className="tinyBars">
              <div className="greenBar"></div>
              <div className="orangeBar"></div>
            </div>

          </div>

          {}
          <div className="yellowButtons">

            <div className="yellowBox"></div>
            <div className="yellowBox"></div>

          </div>

        </div>

      </div>

    </div>
  );
}