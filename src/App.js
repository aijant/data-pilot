import Main from './pages/main'
import Benefits from './pages/benefits'
import Module from './pages/module'
import Technical from "./pages/technical";
import Scenarios from "./pages/scenarios"
import { Lines } from './components/lines';
import { Nav } from './pages/nav';

function App() {
  return (
    <div className="main-background">
      <Lines />
      <div className='main-container'>
        <Nav />
        <Main />
        <Benefits />
        <Module />
        <Technical />
        <Scenarios />
      </div>
    </div>
  )
}

export default App;
