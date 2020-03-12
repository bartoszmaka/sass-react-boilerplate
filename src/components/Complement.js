import React from 'react';
import cn from 'classnames'

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
    <article className="complement">
      <h3 className="header">Complement Your Journey</h3>
      <p className="complement__subheader">Explore the additional services we offer to make your journey even more memorable.</p>

      <section className="complement__circles-container">
        {circles.map(({ icon, text }, index) => (
          <figure className="complement-circle" key={index}>
            <div className="complement-circle__icon-wrapper">
              <img
                className={cn('complement-circle__icon', {'-alternative': index === 0})}
                src={icon}
                alt=""
              />
            </div>
            <figcaption>
              <p className="complement-circle__content">{text}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </article>
  )
}

export default Complement
