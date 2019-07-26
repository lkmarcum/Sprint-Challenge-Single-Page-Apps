import React from "react";

export default function CharacterCard({ character }) {
  console.log(character);
  return <span>{character.name}</span>;
}
