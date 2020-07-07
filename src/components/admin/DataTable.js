import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/api";
import auth from "../../services/auth";
import storage from "../../services/storage";

const AdminDataContainer = styled.main`
  padding: 2rem;
  height: 50vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;
const TableHeader = styled.header`
  background: lightgray;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  color: gray;
  text-transform: uppercase;
  font-size: 0.8rem;
`;
const DataContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;
const Server = styled.p`
  color: gray;
  font-size: 0.8rem;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.7rem 0;
  padding-left: 0.5rem;
`;
const Distance = styled.p`
  color: gray;
  font-size: 0.8rem;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.7rem 0;
  padding-right: 0.5rem;
  text-align: right;
`;

const DataTable = (props) => {
  const [servers, setServers] = useState([]);
  const token = storage.getToken();

  useEffect(() => {
    console.log("token", token);
    if (!token) {
      props.history.push("/login");
    } else {
      serversList();
    }
  }, []);

  const serversList = async () => {
    const remoteData = await api.getServers(token);
    setServers(remoteData);
  };

  // setTimeout(serversList, 60000);

  useEffect(() => {
    localStorage.setItem("servers", JSON.stringify(servers));
  }, [servers]);

  return (
    <AdminDataContainer>
      <TableHeader>
        <p>Server</p>
        <p>Distance</p>
      </TableHeader>
      <section>
        {servers.map((server, index) => (
          <DataContainer key={index}>
            <Server>{server.name}</Server>
            <Distance>{server.distance}</Distance>
          </DataContainer>
        ))}
      </section>
    </AdminDataContainer>
  );
};

export default DataTable;
