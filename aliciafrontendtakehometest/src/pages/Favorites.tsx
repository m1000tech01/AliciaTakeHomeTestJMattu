import { useContext } from "react";
import Context from "../context";

const defaultProps = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "height",
    label: "Height",
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

const Favorites = () => {
  const appContext: any = useContext(Context);
  const { characters, favorites } = appContext;

  console.log({ favorites });

  return (
    <div>
      {favorites
        .map((index: number) => characters[index])
        .map((character: any) => (
          <div>
            <ul>
              {defaultProps.map((prop) => (
                <li>
                  {prop.label}: {character[prop.name]}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
