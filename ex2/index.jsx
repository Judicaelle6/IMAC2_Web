import React from 'react';
import Character from './Character';

export const character = {
  name: 'Andy Dufresne',
  age: 35,
  job: 'Banker',
  isInPrison: true,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const Tenley = {
  name: 'Tenley Lockwood',
  age: 17,
  job: 'Conduit',
  isInPrison: false,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const ExerciseTwoPage = () => (
  <main>
    <p>Here are our characters</p>
    <Character name={character.name} age={character.age} job={character.job} isInPrison={character.isInPrison} picture={character.picture}> </Character>
    <Character name={Tenley.name} age={Tenley.age} job={Tenley.job} isInPrison={Tenley.isInPrison} picture={Tenley.picture}> </Character>
  </main>
);
