import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalle() {
  useEffect(() => {
    obtenerDetalle();
  }, []);

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const { nombre } = useParams();
  const [foto, setFoto] = useState("");
  const [stats, setStats] = useState([]);

  const obtenerDetalle = async () => {
    try {
      const response = await fetch(URL + nombre);
      const data = await response.json();
      setFoto(data.sprites.other["official-artwork"].front_default);
      setStats(data.stats);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="contenedor">
      <h1 className="text-center mt-3">{nombre}</h1>
      <div className="detalle">
        <img src={foto} alt="" className="me-3"></img>
        <div id="stats">
          {stats.map((stat) => (
            <h3>
              {stat.stat.name} : <span>{stat.base_stat}</span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
