import * as React from 'react'
import * as Pages from './pages'
import * as comps from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
      <div className='w-screen h-screen overflow-scroll snap snap-y snap-mandatory'>
        <div className='snap-start relative flex items-center justify-center w-screen h-screen'>
          <Pages.FrontPage />
        </div>
        <div className='snap-start relative flex items-center justify-center w-screen h-screen'>
          <Pages.SpotlightPage />
        </div>
        <div className='snap-start relative flex items-center justify-center w-screen h-screen'>
          <Pages.NewReleasesPage />
        </div>
        <div className='snap-start relative flex items-center justify-center w-screen h-screen'>
          <Pages.MoviesPage/>
        </div>
        <div className='snap-start relative flex items-center justify-center w-screen h-screen'>
          <Pages.ContactPage />
        </div>
            {/*<comps.Footer />*/}
    </div>
  )
}

export default App
