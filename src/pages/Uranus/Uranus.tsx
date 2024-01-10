import Button from "../../components/buttons/Button";
import UranusSvg from '../assets/planet-uranus.svg'

export default function Uranus() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img style={{ width: '300px', height: '300px' }} src={UranusSvg} alt="SaturnSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Uranus</h1>
                    <p>Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.</p>
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
                    <h1>17.2 hours</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>84 years</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>25,362 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>-195°c</h1>
                </div>
            </div>
        </div>
    )
}
