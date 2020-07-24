import React from 'react';
import Play from './Icons/Play.svg';

const Experience = () => {
  const cards = [
    {
      muted: 'Arrive Inspired',
      text: 'Business Class',
      image: 'https://www.placecage.com/c/800/800'
    },
    {
      muted: 'Expect the exceptional',
      text: 'Economy Class',
      image: 'https://www.placecage.com/c/800/800'
    },
    {
      muted: 'Award winning technology',
      text: 'Explore the fleed in AR',
      image: 'https://www.placecage.com/c/800/800',
      expanded: 'Explore the Zabdos A380 or Boeing 777 using our 3D experience',
    },
  ]

  return (
    <article className="experience">
      <section className="description">
        <h2 className="header">The Zadbos Experience</h2>
        <p className="description__text">
          Whether it's your first flight or simply your latest, we work to anticipate your every need
        </p>
        <button className="description__video-container">
          <img className="description__icon" src={Play} alt="" />
          Watch the full video now
        </button>
      </section>

      {cards.map(({ muted, text, image, expanded }, index) => (
        <figure className="card" key={index}>
          <div className="card__image-container">
            <img className="card__image" src={image} alt="" />
            { expanded && (
              <div className="card__expanded">
                <img className="card__icon" src={Play} alt="" />
                <span>{expanded}</span>
              </div>
            )}
          </div>
          <figcaption className="card__description">
            <p className="card__content">{muted}</p>
            <p className="card__title">{text}</p>
          </figcaption>
        </figure>
      ))}
    </article>
  )
}

export default Experience
