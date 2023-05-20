import Main from './pages/main'
import Benefits from './pages/benefits'
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
      </div>
    </div>
  );
}

export default App;
