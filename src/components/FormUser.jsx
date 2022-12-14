import "../styles/FormUser.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUser,
  setUpdateInfo,
  formView,
  setFormView,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    console.log("🚀 ~ file: FormUser.jsx:8 ~ submit ~ data", data);
    if (updateInfo) {
      updateUser(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };
  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <p className="exit" onClick={() => setFormView(!formView)}>
        [x]
      </p>
      <h3>{updateInfo ? "Update user" : "Register new user"}</h3>
      <section className="name">
        <i class="bx bxs-user"></i>
        <input
          type="text"
          required
          placeholder="first_name"
          {...register("first_name")}
        />
        <input
          type="text"
          required
          placeholder="last_name"
          {...register("last_name")}
        />
      </section>
      <div>
        <i class="bx bxs-envelope"></i>
        <input
          type="email"
          required
          placeholder="email"
          {...register("email")}
        />
      </div>
      <div>
        <i class="bx bxs-lock"></i>
        <input
          type="password"
          required
          placeholder="password"
          {...register("password")}
        />
      </div>
      <div className="birthay">
        <i class="bx bxs-cake"></i>
        <input
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          required
          placeholder="birthday"
          {...register("birthday")}
        />
      </div>
      <button onClick={() => setFormView(!formView)}>
        {updateInfo ? "Update" : "Register"}
      </button>
    </form>
  );
};
export default FormUser;
