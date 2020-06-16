import React from "react";
import NavigationBars from "../NavigationBars";

function index() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold text-2xl">Menu Panel</span>
      <NavigationBars />
    </header>
  );
}

export default index;
