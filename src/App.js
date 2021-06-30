import { useEffect, useState } from 'react';
import background from './assets/background.png'
import mars from './assets/mars.svg'
import sistemaSolar from './assets/sistema-solar.png'
import api from './services/api'
import MissionCard from './components/MissionCard'
 
export function App() {

  const [sol, setSol] = useState(0)
  const [newPhotos, setNewPhotos] = useState(0)
  const [launchDate, setLaunchDate] = useState('')
  const [landingDate, setLandingDate] = useState('')
  const [totalPhotos, setTotalPhotos] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const responseSol = await api.get(`?&api_key=${process.env.REACT_APP_API_KEY}`)
      setSol(responseSol.data.rover.max_sol)
      setLaunchDate(responseSol.data.rover.launch_date)
      setLandingDate(responseSol.data.rover.landing_date)
      setTotalPhotos(responseSol.data.rover.total_photos)
      const responseLatestPhotos = await api.get(`/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
      setNewPhotos(responseLatestPhotos.data.latest_photos.length)
    }
    fetchData()
  }, [])

  return (
    <div className="background" style={{backgroundImage: `url(${background})`}}>
        <div className="nav-bar">
            <img id="mars" src={mars} alt="mars-logo"/>
            <div>
              <h1>MARS TODAY</h1>
              <h2>BY PERSEVERANCE</h2>
            </div>
            <img src={sistemaSolar} alt="solar-system"/>
        </div>
        <h1 id="sol">SOL {sol}</h1>
        <h4 id="number-photos">{newPhotos} new photos!</h4>
        <MissionCard launchDate={launchDate} landingDate={landingDate} totalPhotos={totalPhotos}/>
    </div>
  );
}

export default App;
