import React from 'react';

function AuthorCard({ name, surname }) {

  return (
    <li className="nameSurname">
      <p className="author">{surname} {name}</p>
    </li>
  )
}

export default AuthorCard;