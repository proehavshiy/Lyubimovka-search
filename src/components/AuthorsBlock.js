import React from 'react';
import Author from './Author';

function uthorsBlock({ literal }) {

  return (
    <ul className="alphabet">
      <h2 className='alphabet__header'>{literal.group}</h2>
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