import React from "react";
import profil from "./profil.jpg";

const ProfilPhoto = (props) => {
  return (
    <div>
      {props.name}
      <img src={profil} alt="profil" width="10%" />
    </div>
  );
};
export default ProfilPhoto;
