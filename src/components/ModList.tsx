"use client";
import { mods } from "@/content/mods";
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
    <section>
      <h2>Mods</h2>
      <input onChange={handleSearchInput} />
      <div id="mods-list">
        {filteredData.map((mod) => (
          <div key={mod.name}>{mod.name}</div>
        ))}
      </div>
    </section>
  );
};

export default ModList;
