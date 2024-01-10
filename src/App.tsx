import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Mercury from './pages/Mercury/Mercury'
import Venus from './pages/Venus/Venus'
import Earthe from './pages/Earth/Earthe'
import Mars from './pages/mars/mars'
import Jupiter from './pages/Jupiter/Jupiter'
import Saturn from './pages/saturn/Saturn'
import Uranus from './pages/Uranus/Uranus'
import Neptune from './pages/Neptune/Neptune'

function App() {

  return (
    <>

      <BrowserRouter>
        <div className="header">
          <div className="logo">
            <p><Link to='venus'>The Planets</Link></p>
          </div>
          <div className="menu">
            <p><Link to='/'>mercury</Link></p>
            <p><Link to='venus'>venus</Link></p>
            <p><Link to='earth'>Earth</Link></p>
            <p><Link to='mars'>Mars</Link></p>
            <p><Link to='jupiter'>Jupiter</Link></p>
            <p><Link to='saturn'>Saturn</Link></p>
            <p><Link to='urans'>Urans</Link></p>
            <p><Link to='neptune'>Neptune</Link></p>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Mercury></Mercury>} />
          <Route path='/venus' element={<Venus />} />
          <Route path='/earth' element={<Earthe />} />
          <Route path='/Mars' element={<Mars />} />
          <Route path='/Jupiter' element={<Jupiter />} />
          <Route path='/Saturn' element={<Saturn />} />
          <Route path='/urans' element={<Uranus />} />
          <Route path='/Neptune' element={<Neptune />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
