import Button from "../../components/buttons/Button";
import SaturnSvg from '../assets/planet-saturn.svg'
import SaturnSvg2 from '../assets/planet-saturn-internal.svg'
import { useState } from "react";

export default function Saturn() {

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
                    <img style={{ width: '300px', height: '300px' }} src={isOverviewClicked ? SaturnSvg2 : SaturnSvg} alt="SaturnSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Saturn</h1>
                    {
                        isOverviewClicked ?
                            <p>Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.</p> :
                            <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.</p>
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
                    <h1>10.8 hours</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>29.46 years</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>58,232 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>-138°c</h1>
                </div>
            </div>
        </div>
    )
}
