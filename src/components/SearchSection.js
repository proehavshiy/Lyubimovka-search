import React from 'react';
import Form from './Form';
import DATABASE from '../data/data.json';
import searchInfo from '../hooks/searchInfo';

function SearchSection({ input, setInput, searchResults, setSearchResults }) {

  const [headerText, setHeaderText] = React.useState('поиск')

  const changeHeaderText = React.useEffect(() => {
    if (searchResults !== null) {
      setHeaderText(
        searchResults.plays.length &&
          searchResults.authors.length !== 0 ?
          `По запросу «${input}» мы нашли` :
          `По запросу «${input}» мы ничего не нашли`
      )
    }
  }, [searchResults])


  function handleSubmit(evt) {
    evt.preventDefault();
    // берет input и выполняет поиск по базе
    setSearchResults(searchInfo(DATABASE.result, input));
  }

  return (
    <section className="section section__search">
      <h1 className="text header header_margin">
        {headerText}
      </h1>
      <Form
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
      />
    </section>
  )
}

export default SearchSection;