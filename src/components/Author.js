import React from 'react';

function Author({ name, surname }) {

  return (
    <li className="author-card">
      <p className="text author-card__content">{surname} {name}</p>
    </li>
  )
}

export default Author;