import * as React from 'react'
import * as Pages from './pages'
import * as comps from './components'
import './App.css'

function App() {

  return (
    <div className="max-h-screen">
    <div className='sticky top-0'>
    <comps.Header />
    </div>
    <Pages.FrontPage />
      <comps.Footer />
    </div>
  )
}

export default App
