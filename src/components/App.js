import React from 'react';
import Form from './Form';
import DATABASE from '../data/data.json'


function App() {

  const [input, setInput] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  console.log('searchResults:', searchResults);

  function handleSubmit(evt) {
    evt.preventDefault();
    // берет input и выполняет поиск по базе
    setSearchResults(searchInfo(DATABASE.result, input));
  }

  function searchInfo(dataArray, key) {
    if (!Array.isArray(dataArray)) {
      return;
    }
    const searchKey = key.toLowerCase();

    const playsArr = dataArray.reduce((acc, current) => {
      const check = current.title.toLowerCase().includes(searchKey) ? acc.push(current) : acc;
      return acc;
    }, [])

    const authorsArr = dataArray.reduce((acc, current) => {
      const check = (current.author_firstName.toLowerCase().includes(searchKey) || current.author_lastName.toLowerCase().includes(searchKey)) ? acc.push(current) : acc;
      return acc;
    }, [])

    return {
      plays: playsArr,
      authors: authorsArr
    }
  }

  return (
    <div className="page">
      <div className="container">
        <section className="block block__search">
          <h1 className="header">
            Поиск
          </h1>
          <Form
            input={input}
            setInput={setInput}
            onSubmit={handleSubmit}
          />
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
