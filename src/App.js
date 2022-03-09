import "./App.css";
import { useState, useEffect } from "react";
import Floc from "./Floc";

function crearFlocs() {
  return [
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
  ];
}

function nouFloc() {
  return { x: 100 * Math.random(), y: -10 };
} //Posició de cada floc

export default function Nevada() {
  let [flocs, setFlocs] = useState(crearFlocs());

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 70);
  }, []);

  function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  function moureFlocs(flocs) {
    return flocs.map((floc) => moureFloc(floc));
  }

  function moureFloc({ x, y }) {
    if (y >= 100) {
      y = -10;
    }
    return { x: x + generateRandomInt(-1, 1), y: y + 4 * Math.random() };
  }
  return (
    <>
      <div className="App">
        <h1 className="Titol">BON NADAL!</h1>
        {flocs.map((n, i) => (
          <Floc key={i} x={n.x} y={n.y} />
        ))}
      </div>
    </>
  );
}
