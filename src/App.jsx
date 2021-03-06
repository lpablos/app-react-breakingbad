
import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor= styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Aria, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`

const App = () => {
  // State de frases
  const [frase, setFrase] = useState({})

  const consultarApi = async () =>{
    const resumen = await fetch('https://www.breakingbadapi.com/api/quote/random')
      .then( respuesta => respuesta.json())
      .then( resultado => resultado);
      setFrase(resumen[0])    
  }

  // Cargar una frase
   useEffect( () => {
    consultarApi()
  }, []);
  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  )
}

export default App

