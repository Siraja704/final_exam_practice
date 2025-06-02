import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const Filter = searchParams.get("Filter") == "active";

  return (
    <div>
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3 </div>
      <Outlet />
      <div>
        <button
          type="button"
          onClick={() => setSearchParams({ Filter: "active" })}
          className="filter-button"
        >
          Active Users
        </button>

        <button
          type="button"
          className="filter-button"
          onClick={() => setSearchParams({})}
        >
          Rest Filter
        </button>
      </div>
      {Filter ? <h2>Filtered Users</h2> : <h2>All Users</h2>}
    </div>
  );
};

export default User;
