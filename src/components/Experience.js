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
    <div className="experience">
      <div className="experience__header">
        <div className="experience__separator" />
        <h2 className="experience__header-main">The Zadbos Experience</h2>
        <p className="experience__header-muted">Whether it's your first flight or simply your latest, we work to anticipate your every need</p>
        <div className="experience__header-video">
          <img src={Play} alt="" />
          <span>Watch the full video now</span>
        </div>
      </div>

      {cards.map(({ muted, text, image, expanded }, index) => (
        <div className="experience__card" key={index}>
          <div className="experience__card-image">
            <img src={image} alt="" />
            <div className="experience__card-expanded">
              <img src={Play} alt="" />
              <span>{expanded}</span>
            </div>
          </div>
          <div className="experience__card-container">
            <p className="experience__card-content">{muted}</p>
            <div className="experience__card-separator"/>
            <p className="experience__card-title">{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
