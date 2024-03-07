import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  const [Pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  const pichauEvoluido = {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/4/4a/20130810072317%210025Pikachu.png',
    id: 2
  }

  const [Pokemon1, setPokemon1] = useState({
    name: "Charizard",
    type: "Flame",
    evolved: false,
    weight: 90.5,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/archive/3/38/20130512093836%210006Charizard.png',
    id: 1
  })

  const CharizardEvoluido = {
    name: "Charizard Mega Y",
    type: "Flame",
    evolved: true,
    weight: 150,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/archive/a/a0/20240116134457%210006Charizard-Mega_Y.png',
    id: 2
  }



  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        pokemon={Pokemon}
        setPokemon={setPokemon}
        pichauEvoluido={pichauEvoluido}
      />
      <PokemonCard
        pokemon={Pokemon1}
        setPokemon1={setPokemon1}
        CharizardEvoluido={CharizardEvoluido}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>

  );
}

export default App;
