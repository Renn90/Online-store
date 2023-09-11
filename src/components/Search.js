import React from "react";
import "../Styles/Animations.scss";
import style from "../Styles/Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceAction } from "../feautures/Store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  
  const [input, setinput] = useState('')

  const inputref = useRef("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const filterHandler =()=> {
    setinput(inputref.current.value)
    dispatch(sliceAction.searchFilter(input))
    navigate("/results");
    setinput('')
  }

  return (
    <div className={`${style.searchContainer} slidedown`}>
      <SearchIcon className={style.icon} onClick={filterHandler} />
      <input
        placeholder="Search"
        onChange={()=>setinput(inputref.current.value)}
        value={input}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
              filterHandler()
          }
        }}
        ref={inputref}
      />
    </div>
  );
};

export default Search;
