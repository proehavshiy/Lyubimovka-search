import React from 'react';
import AuthorsBlock from './AuthorsBlock';

function AuthorsSection({ searchResults }) {

  return (
    <section className="block block__alphabet">
      {
        searchResults !== null &&
        searchResults.authors.map((literal) => {
          return (
            <AuthorsBlock
              key={literal._id}
              literal={literal}
            />
          )
        })
      }
    </section>
  )
}

export default AuthorsSection;