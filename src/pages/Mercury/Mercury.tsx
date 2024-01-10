import Button from '../../components/buttons/Button'
import "./index.css"
import MercurySvg from '../assets/planet-mercury.svg'
import MercurySvg2 from '../assets/planet-mercury-internal.svg'
import { useState } from 'react';

export default function Mercury() {

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
                    <img src={isOverviewClicked ? MercurySvg2 : MercurySvg} alt="" />
                </div>
                <div className="mercury-right">
                    <h1>Mercury</h1>
                    {
                        isOverviewClicked ?
                            <p>Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.</p> :
                            <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
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
                    <h1>58.6 days</h1>
                </div>
                <div className="block">
                    <p>REVOLUTION TIME</p>
                    <h1>87.97 days</h1>
                </div>
                <div className="block">
                    <p>radius</p>
                    <h1>2,439.7 km</h1>
                </div>
                <div className="block">
                    <p>AVERAGE TEMP.</p>
                    <h1>430°c</h1>
                </div>
            </div>
        </div>
    )
}
