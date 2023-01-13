import React, { useState, useContext } from "react";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import Context from "../context";
import "./Admin.css";

const Admin = () => {
  const appContext: any = useContext(Context);
  const { characters } = appContext;

  const [currentCharacters, setCurrentCharacters] = useState<any>([]);
  const [filter, setFilter] = useState("");

  const handleFilteredCharacters = (event: any) => {
    setFilter(event.target.value);

    let currentSWCharacters = characters.filter((x: any) => {
      return x.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setCurrentCharacters(currentSWCharacters);
  };

  return (
    <>
      <label className="text-center">
        Filter by character name:
        <input
          className="filter"
          placeholder="Character Name"
          value={filter}
          onChange={(event) => handleFilteredCharacters(event)}
        />
      </label>
      <CharactersTable filteredCharacters={currentCharacters} />
    </>
  );
};

export default Admin;
