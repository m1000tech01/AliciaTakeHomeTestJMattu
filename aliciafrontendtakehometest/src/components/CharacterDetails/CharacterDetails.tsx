import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import StarWarsService from "../../services/StarWarsService";
import Context from "../../context";

const defaultProps = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "hair_color",
    label: "Hair color",
  },
  {
    name: "eye_color",
    label: "Eye color",
  },
  {
    name: "gender",
    label: "Gender",
  },
  {
    name: "homeworld",
    label: "Home planet",
  },
];

const CharacterDetails = (props: any) => {
  const appContext: any = useContext(Context);
  const { characters, favorites, addToFavorites, removeFromFavorites } =
    appContext;

  const [characterDetails, setCharacterDetails] = useState<any>({});
  const { id } = useParams();
  const character: any = characters[id || 0];
  console.log(characters[0]);

  useEffect(() => {
    async function fetchCharacterDetails() {
      try {
        const response = await StarWarsService.getCharacterDetails(character);
        console.log(response);
        setCharacterDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    if (character) {
      fetchCharacterDetails();
    } else {
      return;
    }
  }, []);

  // if (!character) return <>Loading...</>;

  return (
    <div>
      {favorites.includes(id) ? (
        <button onClick={() => removeFromFavorites(id)}>
          Favorite character! Remove?
        </button>
      ) : (
        <button onClick={() => addToFavorites(id)}>Add to favorites</button>
      )}
      <ul>
        {defaultProps.map((prop) => (
          <li>
            {prop.label}:{" "}
            {Object.keys(characterDetails).length > 0 ? (
              characterDetails[prop.name]
            ) : (
              <></>
            )}
          </li>
        ))}
        <li>
          Films:
          <ul>
            {Object.keys(characterDetails).length > 0 ? (
              characterDetails.films.map((film: any) => (
                <li>
                  <a href={film}>{film}</a>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </li>
        <li>
          Starships:
          <ul>
            {Object.keys(characterDetails).length > 0 ? (
              characterDetails.starships.map((starship: any) => (
                <li>
                  <a href={starship}>{starship}</a>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
