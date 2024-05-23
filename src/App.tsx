import { useState } from 'react'
import Project from './components/project_cmpnt'
import Header from './components/header_comps/header'
import Spacer from './components/spacer'
import Intoduction from './components/intro'
import Education from './components/Education'
import Infrastructure from './components/Infrastructure'
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
      
      <Spacer height="10%" width="100%" />

      <Intoduction />

      <Spacer height='400px' width='100%' />

      <Education />

      <Spacer height='400px' width='100%' />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicks: {count}
        </button>
      </div>
      <div id="projects">
        <Project text="PROJECT 1"/>
        <Project text="PROJECT 2"/>
      </div>

      <Spacer height='500px' width='100%' />

      <Infrastructure />

      <Spacer height='200px' width='100%' />
    </>
  )
}

export default App
