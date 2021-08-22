import React from 'react';

function Author({ name, surname }) {

  return (
    <li className="nameSurname">
      <p className="author">{surname} {name}</p>
    </li>
  )
}

export default Author;