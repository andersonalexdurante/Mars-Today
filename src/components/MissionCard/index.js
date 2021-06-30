import './index.scss'

export default function MissionCard(props) {
    return (
        <div className="mission-card">
            <div id="mission-status">
                <h3>MISSION STATUS:</h3>
                <h3 id="status">ACTIVE</h3>
            </div>
            <div id="dates">
                <h4>LAUNCH DATE: {props.launchDate}</h4>
                <h4>LANDING DATE: {props.landingDate}</h4>
            </div>
            <h3 id="total-photos">TOTAL PHOTOS: {props.totalPhotos}</h3>
        </div>
    )
}