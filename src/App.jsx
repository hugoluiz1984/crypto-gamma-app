import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CryptoDetail from './pages/CryptoDetail'
import CryptoHome from './pages/CryptoHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<CryptoHome />} exact/>
        <Route path='/coin/:id' element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
