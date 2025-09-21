import './App.css'
import './component/Register.css'
import {  Routes, Route} from 'react-router-dom'
import Main from './component/main'
import Register from './component/Register'
function App() {
  

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/bubbles' element={<Main/>}/>
      </Routes>
    
    
    </>
  )
}

export default App