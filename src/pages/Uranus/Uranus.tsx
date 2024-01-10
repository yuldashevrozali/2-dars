import Button from "../../components/buttons/Button";
import UranusSvg from '../assets/planet-uranus.svg'
import UranusSvg2 from '../assets/planet-uranus-internal.svg'
import { useState } from "react";

export default function Uranus() {

    const [isOverviewClicked, setIsOverviewClicked] = useState(false);

    function handleButtonClick(buttonText: any) {
        if (buttonText === '02 Internal Structure') {
            setIsOverviewClicked(true);
            console.log(true);
        } else {
            setIsOverviewClicked(false);
            console.log(false);
        }
    }

    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img style={{ width: '300px', height: '300px' }} src={isOverviewClicked ? UranusSvg2 : UranusSvg} alt="SaturnSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Uranus</h1>
                    {
                        isOverviewClicked ?
                            <p>The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.</p> :
                            <p>Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.</p>
                        }
                    <div className="buttons">
                        <Button onClick={() => handleButtonClick("01 Overview")} text="01 Overview" />
                        <Button onClick={() => handleButtonClick("02 Internal Structure")} text="02 Internal Structure" />
                        <Button onClick={() => handleButtonClick("03 Surface Geology")} text="03 Surface Geology" />
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
