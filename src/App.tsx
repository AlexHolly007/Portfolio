import { useState } from 'react'
import Projects from './components/projects_section'
import Header from './components/header_comps/header'
import Spacer from './components/spacer'
import Intoduction from './components/intro'
import Education from './components/Education'
import Infrastructure from './components/Infrastructure'
import ChevronAnimation from './components/down_arrows'
import './App.css'
/* TODO
-complete header links to divs in app
-css introduction 
  -circle that shrinks into center and bounces to reveal the welcome message
*/

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header />
      
      <Spacer height="20vh" width="100%" />

      <Intoduction />

      <Spacer height='20vh' width='100%' />

      <ChevronAnimation />

      <Spacer height='40vh' width='100%' />

      <Education />

      <Spacer height='400px' width='100%' />

      <Projects />

      <Spacer height='500px' width='100%' />

      <Infrastructure />

      <Spacer height='200px' width='100%' />
    </>
  )
}

export default App
