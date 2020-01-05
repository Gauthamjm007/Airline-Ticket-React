import React from "react";

import CurrencyBlock from "./CurrencyBlock/CurrencyBlock";
import TransfersBlock from "./StopsBlock/StopsBlock";
import "./FilterBlock.css";

const FilterBlock = () => (
  <aside className="sidebar">
    <CurrencyBlock />
    <TransfersBlock />
  </aside>
);

export default FilterBlock;
