import React, { useState } from "react";
import MainLayout from "../components/MainLayout";

const Home = () => {
  const [input, setinput] = useState("");

  const onInputChange = ev => {
    setinput(ev.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(res =>
      res.json().then(result => {
        console.log("first", result);
      })
    );
  };

  const onKeyDown = ev => {
    console.log("not 13");
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainLayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainLayout>
  );
};

export default Home;
