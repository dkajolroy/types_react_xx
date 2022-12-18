import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
