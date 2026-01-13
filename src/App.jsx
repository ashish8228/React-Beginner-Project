import './App.css'
import CounterApp from './components/counterApp'
import InputHandle from './components/inputHandle'
import ShowHideText from './components/ShowHideText'

function App() {
  return (
    <div className=''>
      <CounterApp />
      <ShowHideText/>
      <InputHandle/>
    </div>
  )
}

export default App
