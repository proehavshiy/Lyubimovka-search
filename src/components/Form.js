import React from 'react';

function Form({ input, setInput, onSubmit }) {

  function handleChange(evt) {
    setInput(evt.target.value);
  }

  return (
    <form className='form form-search' onSubmit={onSubmit} name='form'>
      <input className='input form-search__input' value={input} onChange={handleChange} type="text" name="search" placeholder="введите текст" />
      <button className='submit form-search__submit' type="submit" value="Отправить" aria-label="Кнопка искать" disabled={input === ''}>
        искать
      </button>
    </form>
  )
}

export default Form;