import React from "react";

function Card1({ title, body, onClick }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={onClick}>Update</button>
    </div>
  );
}

export default Card1;