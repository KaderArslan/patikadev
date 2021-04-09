import React, { useState, useEffect } from "react";

import Navbar from "../navbar/Navbar"
import { AddToDo } from "./AddToDo";
import { ToDoList } from "./ToDoList";
import Footer from "../footer/Footer"

const Home= () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const LOCAL_STORAGE_KEY = "toDoList";

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedItems === null) {
      savedItems = [];
    }
    setToDoItems(savedItems);
  }, []);

  const updateToDoItems = list => {
    setToDoItems(list);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  };
    return(
        <>
        <Navbar/>
        <AddToDo
        items={toDoItems}
        updateItems={updateToDoItems}
        title={title}
        description={description}
        updateTitle={title => setTitle(title)}
        updateDescription={desc => setDescription(desc)}
        isEdit={isEdit}
        setIsEdit={flag => setIsEdit(flag)}
        editIndex={editIndex}
      />
      <ToDoList
        items={toDoItems}
        updateItems={updateToDoItems}
        updateTitle={title => setTitle(title)}
        updateDescription={desc => setDescription(desc)}
        setIsEdit={flag => setIsEdit(flag)}
        setEditIndex={index => setEditIndex(index)}
      />
      <Footer/>
        </>
    )
}
export default Home;
