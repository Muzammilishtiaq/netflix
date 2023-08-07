import React from "react";
import SideBar from "./SideBar";
import Table from "../../Compnents/Table";

function Favorite() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button className="bg-main font-medium transition hover:bg-submain border border-submain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        <Table  />
      </div>
    </SideBar>
  );
}

export default Favorite;
