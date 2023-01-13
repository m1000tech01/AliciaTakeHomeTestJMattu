import "./CharactersTable.css";
import { useTable, Column } from "react-table";
import { Link, useNavigate } from "react-router-dom";
import { Character } from "../../types";
import { useContext, useState, useEffect } from "react";
import Context from "../../context";

export interface ParticipantsTableProps {
  characters: Array<Character>;
  handleDelete: Function;
}

const columns: Array<Column> = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Home planet",
    accessor: "homeworld",
  },
];

const CharactersTable = (filteredCharacters: any) => {
  const appContext: any = useContext(Context);
  const { characters, getNext, getPrev, loading } = appContext;
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(10);

  console.log({ characters, getNext, getPrev });

  const navigate = useNavigate();

  const goToPrevPage = () =>
    setRecords(records > 9 && records !== 10 ? records - 10 : records);

  const goToNextPage = () =>
    setRecords(records < characters.length ? records + 10 : records);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data:
        filteredCharacters.filteredCharacters.length > 0
          ? filteredCharacters.filteredCharacters.slice(
              Math.max(records - 10, 0),
              records
            )
          : characters.slice(records > 9 ? records - 10 : 0, records),
    });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {!loading &&
            rows.map((row: any, index: number) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => {
                    navigate(`/details/${index}`);
                  }}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="button-group">
        <button onClick={getPrev} disabled={!getPrev}>
          Back
        </button>
        <button onClick={getNext} disabled={!getNext}>
          Next
        </button>
        <div>Page number {records / 10}</div>
      </div>
    </div>
  );
};

export default CharactersTable;
