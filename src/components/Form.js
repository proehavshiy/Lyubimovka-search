import React from 'react';

function Form({ input, setInput, onSubmit }) {

  function handleChange(evt) {
    setInput(evt.target.value);
  }

  return (
    <form className='search' onSubmit={onSubmit} name='form'>
      <input className='search__input' value={input} onChange={handleChange} type="text" name="search" placeholder="введите текст" />
      <button className='submit' type="submit" value="Отправить" aria-label="Кнопка искать">
        искать
      </button>
    </form>
  )
}

export default Form;