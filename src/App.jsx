import * as React from 'react'
import * as Pages from './pages'
import * as comps from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="">
    {/*<div className='sticky top-0'>
    <comps.Header />
    </div>*/}
    {/*<Routes>
      <Route path="/" element={<Pages.FrontPage />} />
      <Route path="/new" element={<Pages.NewReleasesPage />} />
      <Route path="/ad" element={<Pages.SpotlightPage />} />
      <Route path="/movies" element={<Pages.MoviesPage />} />
      <Route path="/contact" element={<Pages.ContactPage />} />
    </Routes>*/}
    <div className='snap-y snap-mandatory h-screen overflow-scroll'>
      <div className='snap-center h-screen'>
        <Pages.FrontPage />
      </div>
      <div className='snap-center h-screen'>
        <Pages.SpotlightPage />
      </div>
      <div className='snap-center h-screen'>
        <Pages.NewReleasesPage />
      </div>
      <div className='snap-center h-screen'>
        <Pages.MoviesPage/>
      </div>
      <div className='snap-center h-screen'>
        <Pages.ContactPage />
      </div>
    </div>
    {/*<comps.Footer />*/}
    </div>
  )
}

export default App
