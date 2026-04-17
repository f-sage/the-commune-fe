"use client";
import type { ModInfo } from "@/content/mods";
import "./ModList.css";
import { useState } from "react";

export const ModsSearchableContainer = ({ data }: { data: ModInfo[] }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = e.target?.value.toLowerCase() || "";
    setSearchText(lowerCase);
  };

  const filteredData = data.filter((element) => {
    if (!searchText) return element;
    else {
      return element.name.toLowerCase().includes(searchText);
    }
  });

  return (
    <>
      <div id="mods-details">
        <div id="total">total: {data.length}</div>
        <div className="search">
          <label htmlFor="search-mods">Search by name...</label>
          <input id="search-mods" onChange={handleSearchInput} />
        </div>
      </div>
      <ul id="mods-list">
        {filteredData.map((mod) => (
          <li key={mod.name}>
            <ModChip mod={mod} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ModsSearchableContainer;

const ModChip = ({ mod }: { mod: ModInfo }) => {
  if (!mod.link) return <span className="mod-chip">{mod.name}</span>;
  return (
    <a className="mod-chip" href={mod.link} target="_blank">
      {mod.name}
    </a>
  );
};
