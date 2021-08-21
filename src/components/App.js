import React from 'react';

function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="block block__search">
          <h1 className="header">
            Поиск
          </h1>
          <form className='search'>
            <input className='search__input' value='' onChange='' type="text" name="search" placeholder="введите текст" />
            <button className='submit' type="submit" value="Отправить" aria-label="Кнопка искать">
              искать
            </button>
          </form>
        </section>
        <section className="block block__cards">
          <ul className="cards">
            <li className="card">
              <div>
                <h2 className="title">Август 1999 или Никита, любовь и голуби</h2>
              </div>
              <p className="author">Бжожовский Теодор</p>
              <p className="cityAndYear">Санкт-Петербург 2020</p>
            </li>
          </ul>
        </section>
        <section className="block block__alphabet">
          <ul className="alphabet">
            <li className="nameSurname">
              <h2 className="author_alpha">Б</h2>
              <p className="author">Бжожовский Теодор</p>
            </li>
          </ul>
        </section>
      </div>

    </div>
  );
}

export default App;
