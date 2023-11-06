import './App.css'
import NavBar from './layouts/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllTask from './pages/AllTask'
import NewTask from './pages/NewTask'
import EditTask from './pages/EditTask'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route index element={<Home/>} />
       <Route path='/AllTask' element={<AllTask/>}/>
       <Route path='/NewTask' element={<NewTask/>}/>
       <Route path='/EditTask' element={<EditTask/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App