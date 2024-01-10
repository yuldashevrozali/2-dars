import Button from "../../components/buttons/Button";
import NeptuneSvg from '../assets/planet-neptune.svg';
import NeptuneSvg2 from '../assets/planet-neptune-internal.svg';
import { useState } from "react";

export default function Neptune() {
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
                    <img style={{ width: '300px', height: '300px' }} src={isOverviewClicked ? NeptuneSvg2 : NeptuneSvg} alt="NeptuneSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Neptune</h1>
                    {
                        isOverviewClicked ?
                            <p>Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.</p> :
                            <p>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.</p>

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
