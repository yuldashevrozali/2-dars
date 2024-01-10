import Button from '../../components/buttons/Button'
import "./index.css"
import MercurySvg from '../assets/planet-mercury.svg'

export default function Mercury() {
    return (
        <div>
            <div className="mercury-top">
                <div className="mercury-left">
                    <img src={MercurySvg} alt="" />
                </div>
                <div className="mercury-right">
                    <h1>Mercury</h1>
                    <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
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
