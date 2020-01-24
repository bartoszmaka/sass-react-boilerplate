import React from 'react';
import Play from './Icons/Play.svg';
import ArrowRight from './Icons/ArrowRight.svg';
import Dot from './Icons/Dot.svg';
import Brand from './Icons/Brand.svg';
import Hamburger from './Icons/Hamburger.svg';
import Plane from './Icons/Plane.svg';

const Complement = () => {
  const circles = [
    { icon: Play, text: 'Manage Booking' },
    { icon: Plane, text: 'Excess baggage' },
    { icon: Dot, text: 'Paid Lounge Access' },
    { icon: ArrowRight, text: 'Oryx Airport Hotel' },
    { icon: Hamburger, text: 'Al Maha Services' },
    { icon: Brand, text: 'Car Rentals' },
  ]
  return (
    <div className="complement">
      <div className="complement__separator" />
      <h3 className="complement__header">Complement Your Journey</h3>
      <p className="complement__subheader">Explore the additional services we offer to make your journey even more memorable.</p>

      <div className="complement__circle-container">
        {circles.map(({ icon, text }, index) => (
          <div className="complement__circle-item" key={index}>
            <div className="complement__circle-icon">
              <img src={icon} alt="" />
            </div>
            <p className="complement__circle-content">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Complement