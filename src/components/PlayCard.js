import React from 'react';

function PlayCard({ title, name, surname, city, year }) {

  return (
    <li className="play-card">
      <div className="play-card__background-image">
        <h2 className="text play-card__title">{title || ''}</h2>
      </div>
      <div className="play-card__author">
        <p className='text play-card__surname'>{surname || ''}</p>
        <p className='text play-card__name'>{name || ''}</p>
      </div>
      <div className="play-card__info">
        <p className='text play-card__city'>{city || ''}</p>
        <p className='text play-card__year'>{year || ''}</p>
      </div>
    </li>
  )
}

export default PlayCard;