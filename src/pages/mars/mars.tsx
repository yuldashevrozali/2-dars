import Button from "../../components/buttons/Button";
import MarsSvg from '../assets/planet-mars.svg'
export default function Mars() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img src={MarsSvg} alt="MarsSvg" />
                </div>
                <div className="mercury-right">
                    <h1>MARS</h1>
                    <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
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
