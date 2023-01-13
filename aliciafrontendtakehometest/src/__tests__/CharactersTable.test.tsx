import React from "react";
import { render, screen } from "@testing-library/react";

import CharacterTable from "../components/CharactersTable/CharactersTable";
import { MemoryRouter } from "react-router-dom";

const charactersDataMocked = [
  {
    birth_year: "19BBY",
    eye_color: "blue",
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "Tatooine",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
  },
];

test("renders a table", () => {
  //Arrange
  render(<CharacterTable filteredCharacters={charactersDataMocked} />, {
    wrapper: MemoryRouter,
  });

  //Assert
  //expect(screen.getByText("Reference Number")).toBeInTheDocument(); //test location header
  expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  expect(screen.getByText("Tatooine")).toBeInTheDocument();

  const table = screen.getByRole("table");

  expect(table).toBeInTheDocument(); //test table is rendered
});

test("renders table data", () => {
  //Arrange
  render(<CharacterTable filteredCharacters={charactersDataMocked} />, {
    wrapper: MemoryRouter,
  });
  //Assert
  const dataRows = screen.getByText("Name");
  expect(dataRows).not.toBeNull();
});
