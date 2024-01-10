import Button from "../../components/buttons/Button";
import VenusSvg from '../assets/planet-venus.svg';
import VenusSvg2 from '../assets/planet-venus-internal.svg';
import React, { useState } from 'react';
import './index.css';

export default function Venus() {
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
          <img src={isOverviewClicked ? VenusSvg2 : VenusSvg} alt="" />
        </div>
        <div className="mercury-right">
          <h1>VENUS</h1>
          {
            isOverviewClicked ?
              <p>The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.</p> :
              <p>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.</p>
          }
          <div className="buttons">
            <Button onClick={() => handleButtonClick("01 Overview")} text="01 Overview" />
            <Button onClick={() => handleButtonClick("02 Internal Structure")} text="02 Internal Structure" />
            <Button onClick={() => handleButtonClick("03 Surface Geology")} text="03 Surface Geology" />
          </div>
        </div>
      </div>
      <div className="mercury-bottom">
        {/* ... Remaining JSX ... */}
      </div>
    </div>
  )
}
