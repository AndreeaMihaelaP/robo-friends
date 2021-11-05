import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import "./App.css";

const App = () => {
  const [roboFriends, setRoboFriends] = useState([]);
  const [searchField, setSearchField] = useState(" ");

  useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((robots) => setRoboFriends(robots));
  }, []);

  useEffect(() => {
    // fix search filter robots

    setRoboFriends((roboFriends) =>
      roboFriends.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      {!roboFriends.length ? (
        <h1 className="tc">Loading ... </h1>
      ) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={roboFriends} />
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default App;
