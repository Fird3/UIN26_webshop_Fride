import './App.css'
import { Routes, Route } from 'react-router-dom'
import Character from './pages/Character'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters'element={<Characters />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
      </Layout>
  )
}

export default App
