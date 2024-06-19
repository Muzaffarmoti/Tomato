import './App.css';
import welcome from '/welcome.png';
import { login } from '../utils/APIRoutes';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    number: "",
    password: "",
    city: "",
  });

  const toastOption = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("information")) {
      navigate("/Home");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValid()) {
      const { username, number, password, city } = values;
      console.log(values);
      try {
        const { data } = await axios.post(login, {
          username,
          number,
          password,
          city,
        });
        console.log(data);
        if (data.status === false) {
          toast.error(data.msg, toastOption);
        }
        if (data.status === true) {
          localStorage.setItem("information", JSON.stringify(data.user));
          navigate("/Home");
        }
      } catch (error) {
        toast.error("An error occurred during login.", toastOption);
        console.error("Error during login:", error);
      }
    }
  };

  const handleValid = () => {
    const { username, password, number, city } = values;
    if (password.length < 5) {
      toast.error("Password should be greater than 5.", toastOption);
      return false;
    }
    if (username.trim() === "") {
      toast.error("Enter the name", toastOption);
      return false;
    }
    if (number.length !== 13) {
      toast.error("Enter the correct phone number (include +91)", toastOption);
      return false;
    }
    return true; // Add this line to return true for valid cases
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='card1'>
        <div className='main_cont'>
          <div>
            <h1>Welcome</h1>
            <form className='signin' onSubmit={handleSubmit}>
              <label htmlFor='username'>Name</label>
              <input type='text' id='username' name='username' onChange={handleChange} />
              <label htmlFor='number'>Phone Number:</label>
              <input type='text' id='number' name='number' onChange={handleChange} />
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' onChange={handleChange} />
              <label htmlFor='city'>Enter your city</label>
              <input type='text' id='city' name='city' onChange={handleChange} />
              <br />
              <button type='submit'>Sign In</button>
            </form>
          </div>
          <img src={welcome} alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
