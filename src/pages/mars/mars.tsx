import Button from "../../components/buttons/Button";
import MarsSvg from '../assets/planet-mars.svg'
import MarsSvg2 from '../assets/planet-mars-internal.svg'
import { useState } from "react";

export default function Mars() {

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
                    <img src={isOverviewClicked ? MarsSvg2 : MarsSvg} alt="MarsSvg" />
                </div>
                <div className="mercury-right">
                    <h1>MARS</h1>
                    {
                        isOverviewClicked ?
                            <p>Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.</p> :
                            <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
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
                    <h1>1.03 days</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>1.88 years</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>3,389.5 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>−28°c</h1>
                </div>
            </div>
        </div>

    )
}
