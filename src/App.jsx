
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './Components'
import { Contact, Detail, Favs, Home } from './Pages'

export const App = () => {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/detail/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  )
}
