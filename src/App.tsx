import { Route, Routes, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Resume } from "./pages/Resume"

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/projects" />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Resume' element={<Resume />}/>
      </Routes>
    </div>
  )
}

export default App
