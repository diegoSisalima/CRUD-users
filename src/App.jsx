import "./App.css";
import FormUser from "./components/FormUser";
import axios from "axios";
import { useState, useEffect } from "react";
import CardUser from "./components/CardUser";

function App() {
  const [apiData, setApiData] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [formView, setFormView] = useState(true);
  console.log("🚀 ~ file: App.jsx:11 ~ App ~ formView", formView);
  console.log("🚀 ~ file: App.jsx:8 ~ App ~ apiData", apiData);
  const getAllUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  };
  const createNewUser = (data) => {
    axios
      .post("https://users-crud.academlo.tech/users/", data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  const updateUser = (id, data) => {
    axios
      .put(`https://users-crud.academlo.tech/users/${id}/`, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <section className="header mx-wd-container">
        <h1>USERS</h1>
        <a className="create" onClick={() => setFormView(!formView)}>
          + create new user
        </a>
      </section>
      <div className={`form-container ${formView && "form-close"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setUpdateInfo={setUpdateInfo}
          formView={formView}
          setFormView={setFormView}
        />
      </div>
      <div className="card-container mx-wd-container">
        {apiData?.map((user) => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            formView={formView}
            setFormView={setFormView}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

//https://users-crud.academlo.tech/swagger/
