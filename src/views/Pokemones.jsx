import React from 'react'
import context from '../context'
import { useEffect,useContext,useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Pokemones() {

    const {pokemones, setPokemones} = useContext(context);
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();
    const irADetalle= () => {
      if (nombre == '') {
        alert('Seleccione un pokemon');
      }else{ navigate(`/pokemones/${nombre}`);}
    };

    useEffect(() => {
        obtenerDatos();
      }, []);

    const obtenerDatos = async () => {
        try {
            const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
          const response = await fetch(URL);
          const data = await response.json();
          setPokemones(data.results);   
        } catch (error) {
          alert(error);
        }
      };
      console.log(nombre);
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
        <h1>Selecciona un pokemon de la primera generación</h1>
         <Form.Select name="pokemones" defaultValue={'DEFAULT'} className='centro mt-5' onChange={ (e) => setNombre( e.target.value)}>
            <option disabled value="DEFAULT" >Pokemones</option>
            {pokemones.map((pokemon) => (
            <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>
        ))}
        </Form.Select>
        <Button variant="dark" className='mt-5' onClick={ irADetalle }>Ver detalles</Button>
    </div>
  )
}
