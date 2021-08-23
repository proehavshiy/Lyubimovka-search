import React from 'react';
import PlaysBlock from './PlaysBlock';

function PlaysSection({ searchResults }) {

  return (
    <section className="section section__plays">
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