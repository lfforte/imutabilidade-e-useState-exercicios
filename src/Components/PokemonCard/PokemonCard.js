import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



export default function PokemonCard({ pichauEvoluido, CharizardEvoluido, pokemon, setPokemon, pokemon1, setPokemon1 }) {

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir")
    if (pokemon.name === 'Pichu') {
      setPokemon(pichauEvoluido)
    } else if (pokemon.name === 'Charizard') {
      setPokemon1(CharizardEvoluido)
    }

  }

  return (
    <Card color={pokemon.color}>
      <img src={pokemon.image} alt={`Pokemon`} />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>{pokemon.type}</PokemonType>
      <p>{pokemon.weight}kg</p>

      <EvolveButton
        onClick={() => evoluirPokemon()}>Evoluir!
      </EvolveButton>
    </Card>
  )
}