import React from 'react'
import Style from './SearchCardItem.module.css'
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";

function SearchCardItem() {
    const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={theme === "Light" ? Style.card_Light : Style.card_Dark}>
       <BsFillFileEarmarkFill color={theme === "Light" ? "#80AFE7" : "white"} size={60} />

       <p>
        hello.txt
       </p>

       <p style={{fontSize:"18px"}}>
        Type: text file
       </p>
     </div>
    </div>
  )
}

export default SearchCardItem
