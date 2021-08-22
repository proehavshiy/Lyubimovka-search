import React from 'react';
import PlayCard from './PlayCard';

function PlaysBlock({ plays }) {

  return (
    <ul className="cards">
      {
        plays.map((play) => {
          return (
            <PlayCard
              key={play._id}
              title={play.title}
              name={play.author_firstName}
              surname={play.author_lastName}
              city={play.city}
              year={play.year}
            />
          )
        })
      }
    </ul>
  )
}

export default PlaysBlock;