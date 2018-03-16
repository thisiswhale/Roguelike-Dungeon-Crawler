import React from 'react';

const CharacterInfo = (props) => {
  const {
    level, health, weapon, atk, exp, nextLvl
  } = props.data;
  return (
    <div>
      <div className="tab-level">Level: {level}</div>
      <div className="tab-health">Health: {health}</div>
      <div className="tab-weapon">Weapon: {weapon}</div>
      <div className="tab-atk">Attack: {atk}</div>
      <div className="tab-exp">Next Level: {nextLvl[0]}</div>
    </div>
  );
};

export default CharacterInfo;
