import { createContext, useEffect, useState } from "react";
import { Character } from "../types";
import StarWarsService from "../services/StarWarsService";

const Context = createContext({});

type Props = {
  children: JSX.Element;
};

export interface ContextValue {
  characters: Array<Character>;
  setCharacters: Function;
  favorites: Array<number>;
  addToFavorites: Function;
  removeFromFavorites: Function;
  getNext: Function;
  getPrev: Function;
  loading: Boolean;
}

export const ContextProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [getNext, setGetNext] = useState<Function>(() => {});
  const [getPrev, setGetPrev] = useState<Function>(() => {});
  const [favorites, setFavorites] = useState<Array<number>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const addToFavorites = (id: number) => {
    setFavorites([...favorites, id]);
  };
  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  const contextValue: ContextValue = {
    characters,
    setCharacters,
    favorites,
    addToFavorites,
    removeFromFavorites,
    getNext,
    getPrev,
    loading,
  };

  useEffect(() => {
    async function getCharacters(url = undefined) {
      setLoading(true);
      const {
        peopleresults: result,
        next,
        previous,
      } = await StarWarsService.getSWCharacters(url);
      console.log({ next, previous, result });
      setCharacters(result);
      setGetNext(() => () => getCharacters(next));
      setGetPrev(() => () => getCharacters(previous));
      setLoading(false);
    }
    getCharacters();
  }, []);

  /*const filteredCharacters = !filter
    ? characters
    : characters.filter(
        ({ referenceNumber }) => Number(referenceNumber) === Number(filter)
      );*/

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
