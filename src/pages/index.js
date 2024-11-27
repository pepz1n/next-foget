import React from 'react';
import BotaoLouco from '../components/Button';
import axios from '../utils/axios';
import MainLayout from '@/layouts/layoutPadrao';
import { useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState('');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = async () => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1, 100)}`)
    setData(pokemon.name)

    alert(`Seu Pokemon e: ${data}`)
  };

  return (
    <MainLayout>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Bem-vindo ao meu app!</h1>
        <BotaoLouco text="Escolha um pokemon aleatorio" onClick={handleClick} />
        <span> {data} </span>
      </div>
    </MainLayout>
  );
}
