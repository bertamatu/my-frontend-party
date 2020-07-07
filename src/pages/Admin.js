import React from "react";
import styled from "styled-components";
import DataTable from "../components/admin/DataTable";
import Logo from "../components/logo/DarkLogo";
import LogoutButton from "../components/admin/LogoutButton";

const Header = styled.header`
  margin: 5rem 0 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  padding-bottom: -2rem;
`;
const Admin = () => {
  return (
    <div>
      <Header>
        <Logo />
        <LogoutButton />
      </Header>
      <DataTable />
    </div>
  );
};

export default Admin;
