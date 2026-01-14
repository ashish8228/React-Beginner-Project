import './App.css'
import CharacterCounter from './components/CharacterCounter'
import CounterApp from './components/counterApp'
import InputHandle from './components/inputHandle'
import ShowHideText from './components/ShowHideText'

function App() {
  return (
    <div className=''>
      <CounterApp />
      <ShowHideText/>
      <InputHandle/>
      <CharacterCounter/>
    </div>
  )
}

export default App
