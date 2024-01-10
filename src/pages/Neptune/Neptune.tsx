import Button from "../../components/buttons/Button";
import NeptuneSvg from '../assets/planet-neptune.svg'

export default function Neptune() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img style={{ width: '300px', height: '300px' }} src={NeptuneSvg} alt="SaturnSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Neptune</h1>
                    <p>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.</p>
                    <div className="buttons">
                        <Button text="01 Overview" />
                        <Button text="02 Internal Structure" />
                        <Button text="03 Surface Geology" />
                    </div>
                </div>
            </div>
            <div className="mercury-bottom">
                <div className="block">
                    <p>ROTATION TIME</p>
                    <h1>16.08 hours</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>164.79 years</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>24,622 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>-201°c</h1>
                </div>
            </div>
        </div>
    )
}
