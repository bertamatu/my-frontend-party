import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <main>
      <h1>This is ADMIN page</h1>
      <br />
      <br />
      {/* <button type="submit">LOGOUT</button> */}
      <Link to="/login">Logout</Link>
    </main>
  );
};

export default Admin;
