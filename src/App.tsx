import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { About } from "./pages/about"
import { Projects } from "./pages/projects"
import { Resume } from "./pages/resume"

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Resume' element={<Resume />}/>
      </Routes>
    </div>
  )
}

export default App
