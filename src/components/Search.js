import React, { useEffect } from "react";
import "../Styles/Animations.scss";
import style from "../Styles/Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

const Search = ({ filter, setFilteredData }) => {
  const inputref = useRef("");
  useEffect(()=>{
    setFilteredData(inputref.current.value);
  })

  return (
    <div className={`${style.searchContainer} slidedown`}>
      <SearchIcon className={style.icon} onClick={filter} />
      <input
        placeholder="Search"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
              filter();
          }
        }}
        ref={inputref}
      />
    </div>
  );
};

export default Search;
