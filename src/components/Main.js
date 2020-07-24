import React from 'react';
import { ReactComponent as ExpandDown } from './Icons/ExpandDown.svg';
import { ReactComponent as Plane } from './Icons/Plane.svg';
import { ReactComponent as ArrowRight } from './Icons/ArrowRight.svg';

import cn from 'classnames'

const Main = () => {
  return (
    <article className="main">
      <section className="tab-bar">
        <span className="tab-bar__item">Fly With Us To</span>
        <section className="side-cards">
          {['01', '02', '03'].map((content) => (
            <div key={content} className={cn('side-cards__item', {'-active': content === '01'})}>
              <span>{content}</span>
            </div>
          ))}
        </section>
      </section>

      <h2 className="main__header">Bangkok</h2>
      <p className="main__description">A new door to paradise for just 15000</p>

      <section className="main__details-container">
        <p className="main__details">Book now till 25 Oct 2019</p>
        <p className="main__details">Travel from 25 Oct 2019 to 25 Dec 2019</p>
      </section>

      <button className="main-btn">
        <span className="main-btn__content">Let's Go</span>
        <ArrowRight className="main-btn__icon" />
      </button>

      <form className="search">
        <div className="search__icon-container">
          <Plane className="search__icon -transparent" />
        </div>

        <div className="search__section">
          <label className="search__label">Departure airport</label>
          <button className="search__dropdown" type="button">
            <span>Mumbai (BOM)</span>
            <ExpandDown className="search__icon" />
          </button>
        </div>

        <div className="search__section">
          <label className="search__label">Arrival airport</label>
          <button className="search__dropdown" type="button">
            <span>Aalborg (AAL)</span>
            <ExpandDown className="search__icon" />
          </button>
        </div>

        <button type="button" className="search__button">
          Search
        </button>
      </form>
    </article>
  )
}

export default Main

