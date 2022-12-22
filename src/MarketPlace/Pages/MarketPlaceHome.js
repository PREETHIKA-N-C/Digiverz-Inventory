import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PipelineCard from '../Components/PipelineCard';
import PipelineCardLoader from '../Components/PipelineCardLoader';
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";

import data from '../DummyData/Dummy'

function MarketPlaceHome() {
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 1000);
    return (
      <div>
      <div><h1 className='text-center text-xl'>Data Market pLace</h1></div>
      <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20 overflow-auto h-screen alfa">
        
      {data.map((item) => {
        return (
          <div style={{ margin: "20px" }}>
              {load ? (
                <PipelineCard
                  name={item.id}
                  desc={item.name}
                  img={item.imgUrl}
                  logo={item.summary}
                />
              ) : (
                <PipelineCardLoader />
              )}
          </div>
        );
      })}
    </div>
    </div>
    )
}

export default MarketPlaceHome


