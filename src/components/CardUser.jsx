import React from "react";
import "../styles/CardUser.css";

const CardUser = ({
  user,
  deleteUser,
  setUpdateInfo,
  formView,
  setFormView,
}) => {
  return (
    <div className="card-user">
      <section className="info">
        <b className="name">
          {user.first_name} {user.last_name}
        </b>
        <small className="email">{user.email}</small>
        <small>
          <i class="bx bxs-cake"></i> {user.birthday}
        </small>
      </section>
      <section className="btns">
        <button onClick={() => deleteUser(user.id)} title="delete user">
          <i class="bx bxs-trash" style={{ color: "#ea0c0c" }}></i>
        </button>
        <button
          onClick={() => {
            setUpdateInfo(user);
            setFormView(!formView);
          }}
        >
          <i
            class="bx bxs-edit"
            style={{ color: "#05559e" }}
            title="edit user"
          ></i>
        </button>
      </section>
    </div>
  );
};

export default CardUser;
