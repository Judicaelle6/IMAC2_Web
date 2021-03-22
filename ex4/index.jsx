import React, { useEffect, useState } from 'react';
import './ex4.css';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const nameHeros = [];
  for (let i = 0; i < superheroes.length; i += 1) {
    nameHeros.push(<p>{superheroes[i].name}</p>);
  }

  return (
    <p>
      {nameHeros}
    </p>
  );
};

export default ExerciseFourView;
