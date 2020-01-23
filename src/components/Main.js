import React from 'react';
import ExpandDown from './Icons/ExpandDown.svg';
import Plane from './Icons/Plane.svg';
import ArrowRight from './Icons/ArrowRight.svg';
import Dot from './Icons/Dot.svg';

const Main = () => {
  return (
    <div className="main">
      <div className="main__pre-header">
        <span className="main__pre-header -active">Fly With Us To</span>
        <div className="main__tab">
          <div className="main__tab-item -active">
            <span>01</span>
            <img src={Dot} alt=''/>
          </div>
          <div className="main__tab-item">
            <span>02</span>
            <img src={Dot} alt=''/>
          </div>
          <div className="main__tab-item">
            <span>03</span>
            <img src={Dot} alt=''/>
            </div>
        </div>
      </div>

      <h2 className="main__header">Bangkok</h2>

      <p className="main__description">A new door to paradise for just 15000</p>

      <div className="main__details">
        <p>Book now till 25 Oct 2019</p>
        <p>Travel from 25 Oct 2019 to 25 Dec 2019</p>
      </div>

      <button className="main__button">
        <span className="main__button-content">Let's Go</span>
        <img src={ArrowRight} alt="" className="main__button-icon"/>
      </button>

      <div className="main__search">
        <div className="main__search-icon">
          <img src={Plane} alt="airplane"/>
        </div>

        <div className="main__search-item">
          <p>Departure airport</p>
          <p className="selection">Mumbai (BOM)
            <img src={ExpandDown} alt="" />
          </p>
        </div>

        <div className="main__search-item">
          <p>Arrival airport</p>
          <p className="selection">Aalborg (AAL)
            <img src={ExpandDown} alt="" />
          </p>
        </div>

        <button className="main__search-button">
          Search
        </button>
      </div>
    </div>
  )
}

export default Main

