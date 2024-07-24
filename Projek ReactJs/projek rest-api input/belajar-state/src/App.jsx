// import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form'
import Komentar from './components/Komentar'
import axios from "axios";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const App = () => {
  // staet mode dark
  const [dark, setDark] = useState(false);

  const [items, setItems] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://komen-api.vercel.app/items");
      setItems(response.data);
    } catch (error) {
      console.log("error item:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDark(!dark);
  }
  return (
    <div className={dark ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode} className='btn btn-primary mx-3 my-3'>
        {dark ? <FaSun className='text-warning'/> : <FaMoon/>}
      </button>
      <Form fetchData={fetchData}/>
      <Komentar items={items}/>
    </div>
  )
}

export default App
