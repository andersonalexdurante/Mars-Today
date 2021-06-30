import background from './assets/background.png'
import mars from './assets/mars.svg'
import sistemaSolar from './assets/sistema-solar.png'

 
function App() {

  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="background" style={{backgroundImage: `url(${background})`}}>
        <div className="nav-bar">
            <img src={mars} alt="mars-logo"/>
            <div>
              <h1>MARS TODAY</h1>
              <h2>BY PERSEVERANCE</h2>
            </div>
            
            <img src={sistemaSolar} alt="solar-system"/>
        </div>
    </div>
  );
}

export default App;
