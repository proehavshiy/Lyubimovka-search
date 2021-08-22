import React from 'react';
import Form from './Form';
import PlayCard from './PlayCard';
import AuthorCard from './AuthorCard';
import DATABASE from '../data/data.json';


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

    // поиск пьес
    const playsArr = dataArray.reduce((acc, current) => {
      const check = current.title.toLowerCase().includes(searchKey) ? acc.push(current) : acc;
      return acc;
    }, [])

    // поиск авторов
    const authorsArr = dataArray.reduce((acc, current) => {
      // проверка авторов на дубли
      if (acc.find((item) => item.author_firstName === current.author_firstName || item.author_lastName === current.author_lastName)) return acc;
      const check =
        current.author_firstName.toLowerCase().includes(searchKey) ||
          current.author_lastName.toLowerCase().includes(searchKey)
          ? acc.push({
            author_firstName: current.author_firstName,
            author_lastName: current.author_lastName,
            _id: current._id,
          }) : acc;
      return acc;
    }, [])

    // const AlfaWordsAuthors = authorsArr.map((author) => {
    //   let arr = []
    //   let obj = {}
    //   const firstLetter = author.author_lastName[0];
    //   obj.firstLetter = author;
    //   return arr.push(obj)
    // })

    let data = authorsArr.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.author_lastName[0];
      // if there is no property in accumulator with this letter create it
      if (!r[group]) r[group] = { group, children: [e] }
      // if there is push current element to children array for that letter
      else r[group].children.push(e);
      // return accumulator
      return r;
    }, {})

    const AlfaWordsAuthors = authorsArr.reduce((acc, current) => {
      // проверка букв на дубли
      const firstLetter = current.author_lastName[0];
      // if (acc.find((letter) => {
      //   return letter[current.author_lastName[0]] === current.author_lastName[0]
      // })) {
      //   acc[current.author_lastName[0]].push(current);
      // }
      if (!acc[firstLetter]) acc[firstLetter] = current
      //acc[firstLetter].children.push(current);
      console.log(acc[firstLetter].children)
      // acc.push({
      //   [firstLetter]: current
      // })
      return acc;
    }, {})

    return {
      plays: playsArr,
      authors: Object.values(data)
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
            {searchResults !== null &&
              searchResults.plays.map((play) => {
                return <PlayCard
                  key={play._id}
                  title={play.title}
                  name={play.author_firstName}
                  surname={play.author_lastName}
                  city={play.city}
                  year={play.year}
                />
              })
            }
          </ul>
        </section>
        <section className="block block__alphabet">
          {searchResults !== null &&
            searchResults.authors.map((letter) => {

              return <ul className="alphabet">
                <h2 className='alphabet__header'>{letter.group}</h2>
                {letter.children.map((author) => {
                  return <AuthorCard
                    key={author._id}
                    name={author.author_firstName}
                    surname={author.author_lastName}
                  />
                })
                }
              </ul>
            })
          }

        </section>
      </div>

    </div>
  );
}

export default App;
