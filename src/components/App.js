import React from 'react';
import SearchSection from './SearchSection';
import PlaysSection from './PlaysSection';
import AuthorsSection from './AuthorsSection';


function App() {

  const [input, setInput] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  console.log('searchResults:', searchResults);
  return (
    <div className="page">
      <div className="container">
        <SearchSection
          input={input}
          setInput={setInput}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <PlaysSection
          searchResults={searchResults}
        />
        <AuthorsSection
          searchResults={searchResults}
        />
      </div>
    </div>
  );
}

export default App;
