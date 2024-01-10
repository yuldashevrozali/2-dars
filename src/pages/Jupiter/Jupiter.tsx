import JupiterSvg from '../assets/planet-jupiter.svg'
import Button from '../../components/buttons/Button'

export default function Jupiter() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img style={{ width: '300px', height: '300px' }} src={JupiterSvg} alt="" />
                </div>
                <div className="mercury-right">
                    <h1>Jupiter</h1>
                    <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.</p>
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
