import background from './assets/background.png'
import mars from './assets/mars.svg'
import sistemaSolar from './assets/sistema-solar.png'

function App() {
  return (
    <div className="background" style={{backgroundImage: `url(${background})`}}>
        <div className="nav-bar">
            <img src={mars} alt="mars-logo"/>
            <h1>MARS TODAY</h1>
            <img src={sistemaSolar} alt="solar-system"/>
        </div>
    </div>
  );
}

export default App;
