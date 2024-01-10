import Button from "../../components/buttons/Button";
import SaturnSvg from '../assets/planet-saturn.svg'

export default function Saturn() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img style={{ width: '300px', height: '300px' }} src={SaturnSvg} alt="SaturnSvg" />
                </div>
                <div className="mercury-right">
                    <h1>Saturn</h1>
                    <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.</p>
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
