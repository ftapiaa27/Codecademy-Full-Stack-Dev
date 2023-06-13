import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  // use loggedIn to return a Navigate
  if (!loggedIn) {
    return(
      <Navigate to='/sign-up'/>
    );
    // navigate('/sign-up');
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      <Outlet/>
    </main>
  )
}
