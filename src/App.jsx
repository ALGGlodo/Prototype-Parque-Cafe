import Navbar from './components/navbar'
import {Hero, HomepageContents}  from './components/homepage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HomepageContents />
    </div>
  )
}

export default App
