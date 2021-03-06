import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import FinalResult from './components/FinalResult';
import About from './components/About';
import Random from './components/Random';

function App() {
  const searchOptions = {
    api: 'https://rickandmortyapi.com/api/',
    endpoint: 'character/'
  };

  let randomPage = Math.floor(Math.random() * 26);

  const [results, setData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getData(searchString);
  }, []);

  function getData() {
    let url =
      searchString === ''
        ? `${searchOptions.api}${searchOptions.endpoint}?page=${randomPage}`
        : `${searchOptions.api}${searchOptions.endpoint}?name=${searchString}`;

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
        path="/random"
        render={() => {
          return <Random />;
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
