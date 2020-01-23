import React from 'react';

const Complement = () => {
  const circles = [
    { icon: '', text: 'Manage Booking' },
    { icon: '', text: 'Excess baggage' },
    { icon: '', text: 'Paid Lounge Access' },
    { icon: '', text: 'Oryx Airport Hotel' },
    { icon: '', text: 'Al Maha Services' },
    { icon: '', text: 'Car Rentals' },
  ]
  return (
    <div className="complement">
      <div className="complement__separator" />
      <h3 className="complement__header">Complement Your Journey</h3>
      <p className="complement__subheader">Explore the additional services we offer to make your journey even more memorable.</p>

      <div className="complement__circle-container">
        {circles.map(({ icon, text }) => (
          <div className="complement__circle-item">
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