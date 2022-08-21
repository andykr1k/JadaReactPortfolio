import * as React from 'react'
import * as Pages from './pages'
import * as comps from './components'
import './App.css'

function App() {

  return (
    <div className="App">
      <comps.Header />
      <Pages.FrontPage />
      <comps.Footer />
    </div>
  )
}

export default App
