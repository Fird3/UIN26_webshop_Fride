import './App.css'
import { Routes, Route } from 'react-router-dom'
import Categories from './components/Categories'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'


function App() {



  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />}>
          <Route index element={<Categories />} />
          {/* du kan kalle path under akkurat d du vil */}
          <Route path=':slug' element={<Category />} />

        </Route>
        <Route path='about' element={<About />}/>
      </Routes>
   </Layout>
  )
}

export default App
