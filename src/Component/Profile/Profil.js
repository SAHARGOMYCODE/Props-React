import React from "react";
import PropTypes from "prop-types";

const Profil = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.fullname}</p>
      <p>{props.bio}</p>
      <p>{props.prof}</p>
      {props.children}
    </div>
  );
};

Profil.defaultProps = {
  fullname: "i'm student",
  bio: "je suis étudiante a gomycode",
  prof: "fullstack",
};
Profil.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  prof: PropTypes.string,
};

export default Profil;
