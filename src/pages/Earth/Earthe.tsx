import Button from '../../components/buttons/Button'
import EarthSvg from '../assets/planet-earth.svg'
import EartheSvg2 from '../assets/planet-earth-internal.svg'
import { useState } from 'react';

export default function Earthe() {

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
          <img src={isOverviewClicked ? EartheSvg2 : EarthSvg} alt="" />
        </div>
        <div className="mercury-right">
          <h1>EARTH</h1>
          {
            isOverviewClicked ?
              <p>Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.</p> :
              <p>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
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
