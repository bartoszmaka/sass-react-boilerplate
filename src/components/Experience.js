import React from 'react';

const Experience = () => {
  const cards = [
    { muted: 'Arrive Inspired', text: 'Business Class', image: 'https://www.placecage.com/c/600/250' },
    { muted: 'Expect the exceptional', text: 'Economy Class', image: 'https://www.placecage.com/c/600/250' },
    { muted: 'Award winning technology', text: 'Explore the fleed in AR', image: 'https://www.placecage.com/c/600/250' },
  ]

  return (
    <div className="experience">
      <div className="experience__separator" />
      <div className="experience__header">
        <h2 className="experience__header-main">The Zadbos Experience</h2>
        <p className="experience__header-muted">Whether it's your first flight or simply your latest, we work to anticipate your every need</p>
        <div>
          <img src="" alt="" />
          <span><span>This Is Play Icon</span>Watch the full video now</span>
        </div>
      </div>

      {cards.map(({ muted, text, image }) => (
        <div className="experience__card">
          <img className="experience__card-image" src={image} alt="" />
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
