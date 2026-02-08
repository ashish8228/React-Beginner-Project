import './App.css'
import ButtonColorToggle from './components/ButtonColorToggle'
import CharacterCounter from './components/CharacterCounter'
import CounterApp from './components/counterApp'
import InputHandle from './components/inputHandle'
import LoginUi from './components/LoginUi'
import ShowHideText from './components/ShowHideText'
import SimpleForm from './components/SimpleForm'
import SimpleTodoList from './components/simpleToDo'

function App() {
  return (
    <div className='overflow-hidden'>
      <CounterApp />
      <ShowHideText/>
      <InputHandle/>
      <CharacterCounter/>
      <SimpleTodoList/>
      <ButtonColorToggle/>
      <LoginUi/>
      <SimpleForm/>
    </div>
  )
}

export default App
