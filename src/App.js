import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import FinalResult from './components/FinalResult';
import About from './components/About';

let charArray = ['Beth', 'Jerry', 'Rick', 'Morty', 'Summer'];

let randomChar = charArray[Math.floor(Math.random() * charArray.length)];

function App() {
  const searchOptions = {
    api: 'https://rickandmortyapi.com/api/',
    endpoint: 'character/'
  };

  const [results, setData] = useState([]);
  const [searchString, setSearchString] = useState(randomChar);
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getData(searchString);
    // thisCharacter(finalResult);
  }, []);

  function getData() {
    const url = `${searchOptions.api}${searchOptions.endpoint}?name=${searchString}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.results);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData(searchString);
  }

  return (
    <div>
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Route
        exact
        path="/"
        render={() => {
          return <SearchResults results={results} />;
        }}
      />
      <Route
        exact
        path="/about"
        render={() => {
          return <About />;
        }}
      />
      <Route
        exact
        path="/character/:id"
        render={routerProps => <FinalResult match={routerProps.match} />}
      />
    </div>
  );
}

export default App;
