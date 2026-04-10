"use client";
import { type ModInfo, mods } from "@/content/mods";
import "./ModList.css";
import { useState } from "react";

const ModList = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = e.target?.value.toLowerCase() || "";
    setSearchText(lowerCase);
  };

  const filteredData = mods.filter((element) => {
    if (!searchText) return element;
    else {
      return element.name.toLowerCase().includes(searchText);
    }
  });

  return (
    <section id="mods">
      <h2>Mods</h2>
      <div id="total">total: {mods.length}</div>
      <label>
        Search by name
        <input onChange={handleSearchInput} />
      </label>
      <ul id="mods-list">
        {filteredData.map((mod) => (
          <li key={mod.name}>
            <ModChip mod={mod} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ModList;

const ModChip = ({ mod }: { mod: ModInfo }) => {
  if (!mod.link) return <span className="mod-chip">{mod.name}</span>;
  return (
    <a className="mod-chip" href={mod.link} target="_blank">
      {mod.name}
    </a>
  );
};
