import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return <div>유저: {username}</div>;
}

export default User;
