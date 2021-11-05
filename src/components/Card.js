import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-gray tc grow br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
