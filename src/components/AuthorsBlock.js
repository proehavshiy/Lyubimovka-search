import React from 'react';
import Author from './Author';

function uthorsBlock({ literal }) {

  return (
    <ul className="author-cards">
      <h2 className='text author-cards__title'>{literal.group}</h2>
      {
        literal.children.map((author) => {
          return <Author
            key={author._id}
            name={author.author_firstName}
            surname={author.author_lastName}
          />
        })
      }
    </ul>
  )
}

export default uthorsBlock;