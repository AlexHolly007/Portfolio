import { useState } from 'react'
import Project from './components/project_cmpnt'
import Header from './components/header_comps/header'
import Spacer from './components/spacer'
import './App.css'
/* TODO
-add componenets for individual header items*
-css header more*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Spacer height="80px" width="100%" />
      <Spacer height='1000px' width='100%' />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicks: {count}
        </button>
      </div>
      
      <div id="projects">
        <Project text="PROJECT 1"/>
        <Project text="PROJECT 2"/>
      </div>
      <Spacer height='800px' width='100%' />
    </>
  )
}

export default App