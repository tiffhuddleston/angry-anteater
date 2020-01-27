import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import FinalResult from './components/FinalResult';

function App() {
  const searchOptions = {
    api: 'https://rickandmortyapi.com/api/',
    endpoint: 'character/'
  };

  const [results, setData] = useState([]);
  const [searchString, setSearchString] = useState('Rick');
  const [lastSearch, setLastSearch] = useState('');
  const [singleChar, setSingleChar] = useState([0]);

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
        setSingleChar(response.results);
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
        path="/"
        render={() => {
          return <SearchResults results={results} />;
        }}
      />
      <Route
        exact
        path="/finalresult/:name"
        render={routerProps => (
          <FinalResult
            match={routerProps.match}
            results={results}
            singleChar={singleChar}
          />
        )}
      />
    </div>
  );
}

export default App;
