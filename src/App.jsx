import { useState } from 'react'
import './App.css'
import { NovaTarefa } from './components/Header/NovaTarefa'
import { ItemAFazer } from './components/ListaAFazer/ItemAFazer'
import { ItemFeito } from './components/ListaFeita/ItemFeito'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        
        <div class="lista_de_tarefas">
        <NovaTarefa></NovaTarefa>
        <ItemAFazer></ItemAFazer>
        <ItemFeito></ItemFeito>
        </div>
    </div>
  )
}

export default App
