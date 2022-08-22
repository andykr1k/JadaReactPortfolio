import * as React from 'react'
import * as Pages from './pages'
import * as comps from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="max-h-screen">
    <div className='sticky top-0'>
    <comps.Header />
    </div>
    <Routes>
      <Route path="/" element={<Pages.FrontPage />} />
      <Route path="/new" element={<Pages.NewReleasesPage />} />
      <Route path="/ad" element={<Pages.SpotlightPage />} />
      <Route path="/movies" element={<Pages.MoviesPage />} />
      <Route path="/contact" element={<Pages.ContactPage />} />
    </Routes> 
    <comps.Footer />
    </div>
  )
}

export default App
