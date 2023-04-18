import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import def_ava from "../../../../images/def_avatar.png";

import "./style.scss";

export const PrewUser = ({ user }) => {
  const navigate = useNavigate();
  const { name, surname, avatar } = user;
  const [ava, setAva] = useState(def_ava);

  useEffect(() => {
    if (avatar !== "default") {
      setAva(avatar);
    }
  }, [avatar]);

  function handleAllPostUser() {
    navigate("/allposts/" + name);
  }

  return (
    <section className="user" onClick={handleAllPostUser}>
      <img alt="user ava" className="user__ava" src={ava} />
      <section className="user__right">
        <p className="user__text">{name}</p>
        <p className="user__text">{surname}</p>
      </section>
    </section>
  );
};
