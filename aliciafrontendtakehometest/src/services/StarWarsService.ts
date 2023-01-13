import { Console } from "console";
import { Character } from "../types";
const API_URL = "https://swapi.dev/api/people";

export const getSWCharacters = async (paginationurl = API_URL) => {
  console.log("getSWCharacters called", paginationurl);
  const people = await fetch(paginationurl);
  const { results, next, previous } = await people.json();
  let peopleresults: any[] = results;

  const req = [];
  for (let i = 0; i < peopleresults.length; i++) {
    // Planets
    const planet = fetch(peopleresults[i].homeworld);

    req.push(planet);
  }

  const allData = await Promise.all(req.map((r) => r.catch((e) => e)));
  // const filtered = allData.filter((r) => !(r instanceof Error));
  const planets = await Promise.all(allData.map((data) => data.json()));
  planets.forEach((planet, i) => (peopleresults[i].homeworld = planet.name));

  return {
    peopleresults,
    next,
    previous,
  };
};

export const getCharacterDetails = async (characterDetails: any) => {
  console.log(characterDetails);
  console.log("these are the characterDetails" + characterDetails);
  //films
  for (let j = 0; j < characterDetails.films.length; j++) {
    const response = await fetch(characterDetails.films[j]);
    const filmData = await response.json();
    characterDetails.films[j] = filmData.title;
    console.log(filmData);
  }

  //starships
  for (let j = 0; j < characterDetails.starships.length; j++) {
    const response = await fetch(characterDetails.starships[j]);
    const starshipData = await response.json();
    characterDetails.starships[j] = starshipData.name;
    console.log(starshipData);
  }
  console.log(characterDetails);
  return characterDetails;
};

export default {
  getSWCharacters,
  getCharacterDetails,
};
