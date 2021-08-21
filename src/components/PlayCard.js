import React from 'react';

function PlayCard({ title, name, surname, city, year }) {

  return (
    <li className="card">
      <h2 className="title">{title || ''}</h2>
      <p className="author">{surname || ''} {name || ''}</p>
      <p className="cityAndYear">{city || ''} {year || ''}</p>
    </li>
  )
}

export default PlayCard;