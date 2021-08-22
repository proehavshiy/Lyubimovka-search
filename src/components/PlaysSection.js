import React from 'react';
import PlaysBlock from './PlaysBlock';

function PlaysSection({ searchResults }) {

  return (
    <section className="block block__cards">
      {
        searchResults !== null &&
        <PlaysBlock
          plays={searchResults.plays}
        />
      }
    </section>
  )
}

export default PlaysSection;