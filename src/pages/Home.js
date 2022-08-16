import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchFor, setSearchFor] = useState("shows");

  const isShowsSearch = searchFor === "shows";

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    if (searchFor) {
      apiGet(`/search/${searchFor}?q=${input}`).then(result => {
        setResults(result);
      });
    }
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchFor(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No record found!</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <MainLayout>
      <input
        type="text"
        placeholder="Search for"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="show">
          Shows
          <input
            id="show"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor">
          Actor
          <input
            id="actor"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainLayout>
  );
};

export default Home;
