import React, { useState, useEffect, useCallback } from "react";
import uuid from "react-uuid";
import List from "./Components/List";
import Search from "./Components/Search";
import Header from "./Components/Container/Layout/Header"
import Pagination from "./Components/Pagination";
import Container from "./Components/Container";
import Sort from "./Components/Sort";
import Modal from "./Components/Modal";
import mock  from './mock/mock.json'

import "./scss/main.scss";

const App = () => {

  const [name, setName] = useState("");
  const [data, setData] = useState(mock);
  const [activePage, setActivePage] = useState(1);
  const [filteredData, setFilteredData] = useState({});
  const [sort, setSort] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const insertFilteredData = useCallback(() => {
    // setting filtered data
    const keyword = name.toLowerCase();

    const list = Object.values(data).filter((searchTerm) => {
      const term = searchTerm.name.toLowerCase();
      return term.indexOf(keyword) > -1;
    });

    setFilteredData(list);
  }, [data, name]);

  useEffect(() => {
    insertFilteredData();
  }, [data, insertFilteredData]);

  const handleChange = (e) => {
    setName(e.target.value);

    insertFilteredData();
  };

  const handleKeyPress = (e) => {
    if (e.which === 13 && name.length > 0) {
      const id = uuid();
      setData({ [id]: { id, name, fav: false }, ...data });
      setName("");
    }
  };

  const handleFavBtnPress = (id) => {
    setData({ ...data, [id]: { ...data[id], fav: !data[id].fav } });
  };

  const handleDelete = (id) => {
    console.log(id)
    setModal(true);
    setModalId(id);
  };

  const handleClickYes = () => {
    const newData = { ...data };
    delete newData[modalId];
    setData(newData);
    setModal(false);
  };

  return (
    <Container>
      <Header>Friend's List</Header>
      <Search
        name={name}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
      />
      <Sort sort={sort} setSort={setSort} />
      <List
        name={name}
        data={name.length > 0 ? filteredData : data}
        activePage={activePage}
        sort={sort}
        handleFavBtnPress={handleFavBtnPress}
        handleDelete={handleDelete}
      />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        dataKeys={
          name.length > 0 ? Object.keys(filteredData) : Object.keys(data)
        }
      />
      {modal ? (
        <Modal handleClickYes={handleClickYes} setModal={setModal} />
      ) : null}
    </Container>
  );
};

export default App;
