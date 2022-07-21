import React, { useEffect, useState } from "react";
import "./user.css";

import axios from "axios";
import { getUser, isLoading } from "./userAPI";
import { useDispatch, useSelector } from "react-redux";
const User = () =>{
  const dispatch = useDispatch()
  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://localhost:5000/getuser`,
    };
    axios
      .request(options)
      .then((response) => {
        dispatch(isLoading(true))
        dispatch(getUser(response.data.UserData.results[0]))
        dispatch(isLoading(false))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const user = useSelector(state => state.user.user)
  const Loading = useSelector(state => state.user.status)
  if (Loading) {
    return <h1>Loading...</h1>
  }
  const renderUser = () => {
    return (
      <>
        <div className="user__left">
          <img src={user.picture.large} alt="" />
        </div>
        <div className="user__right">
            <ul>
              <li>
                <h1>
                  {user.name.first} {user.name.last}
                </h1>
              </li>
              <li>
                <h3>Email: {user.email}</h3>
              </li>
              <li>
                <h3>Phone: {user.phone}</h3>
              </li>
              <li>
                <h3>City: {user.location.city}</h3>
              </li>
            </ul>
        </div>
      </>
    );
  };

  return <div className="user">{renderUser()}</div>;
}

export default User;
