import Home from './Comp/Home'
import { Route, Routes } from 'react-router-dom'
import Que from './Comp/Quesion'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/que' element={<Que/>}/>
      </Routes>
    </>
  )
}

export default App
