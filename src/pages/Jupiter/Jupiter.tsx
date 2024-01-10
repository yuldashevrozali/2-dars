import JupiterSvg from '../assets/planet-jupiter.svg'
import JupiterSvg2 from '../assets/planet-jupiter-internal.svg'
import Button from '../../components/buttons/Button'
import { useState } from 'react';

export default function Jupiter() {

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
                    <img style={{ width: '300px', height: '300px' }} src={isOverviewClicked ? JupiterSvg2 : JupiterSvg} alt="JupiterSvg2" />
                </div>
                <div className="mercury-right">
                    <h1>Jupiter</h1>
                    {
                        isOverviewClicked ?
                            <p>When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.</p> :
                            <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.</p>
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
                    <h1>9.93 hours</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>11.86 years</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>69,911 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>-108°c</h1>
                </div>
            </div>
        </div>
    )
}
