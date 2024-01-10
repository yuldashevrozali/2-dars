import Button from '../../components/buttons/Button'
import MercurySvg from '../assets/planet-mercury.svg'

export default function Earthe() {
  return (
    <div>
      <div className="mercury-top">
        <div className="mercury-left">
          <img src={MercurySvg} alt="" />
        </div>
        <div className="mercury-right">
          <h1>EARTH</h1>
          <p>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
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
          <h1>0.99 days</h1>
        </div>
        <div className="block">
          <p>REVOLUTION TIME</p>
          <h1>365.26 days</h1>
        </div>
        <div className="block">
          <p>radius</p>
          <h1>6,371 km</h1>
        </div>
        <div className="block">
          <p>AVERAGE TEMP.</p>
          <h1>16°c</h1>
        </div>
      </div>
    </div>
  )
}
